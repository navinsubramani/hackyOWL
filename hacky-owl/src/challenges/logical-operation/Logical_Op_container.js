// Import the React Components
import React, { useEffect } from "react";
import {
    logical_op_challengeList, 
    find_index_challengeList, 
    find_next_index_challengeList,
    find_previous_index_challengeList
} from "./Logical_Op_ChallengeList"

// Import the Redux Components
import { UPDATE_TABDISPLAY, UPDATE_CURRENT_CHALLENGE, UPDATE_GAME_STATUS } from './Logical_Op_Slice'
import { useDispatch, useSelector } from "react-redux";

// Import the UI components
import { PlayButton } from "../../component/Custom-Buttons";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import Logical_Op_UI from "./Logical_Op_UI"

// Import the Code-edit
import CodeArea from "../../features/code-edit-run/code-edit";
import {UPDATE_CODE_TEMPLATES} from "../../features/code-edit-run/codeSlice"
import executeProgram from "../../features/code-edit-run/run-program"

let outputJSXList = []
let currentChallengeDetails = logical_op_challengeList[0]
let actualInput = undefined
let expectedOutput = undefined
let actualOutput = undefined
let codeResultValid = false
const exec = new executeProgram()

function LogicalOperations() {

    const editorValue = useSelector((state) => state.code.editorValue)
    const editorLang = useSelector((state) => state.code.editorLang)
    const callerCode = useSelector((state) => state.code.callerCode)

    const tabDisplay = useSelector((state) => state.logicalOp.tabDisplay)
    const gameCompleted = useSelector((state) => state.logicalOp.gameCompleted)
    const currentChallengeID = useSelector((state) => state.logicalOp.challengeID)
    currentChallengeDetails = currentChallengeID ? logical_op_challengeList[find_index_challengeList(currentChallengeID)] : currentChallengeDetails
    const dispatch = useDispatch()

    // This function will be executed on the App mount
    useEffect(
        () => {
            outputJSXList = []
            currentChallengeDetails = logical_op_challengeList[0]
            actualInput = undefined
            expectedOutput = undefined
            actualOutput = undefined
            codeResultValid = false

            dispatch(UPDATE_CURRENT_CHALLENGE({
                challengeID: currentChallengeDetails.challengeID
            }))
            dispatch(UPDATE_GAME_STATUS(false))
        },[]
    )
    
    // This function will be executed when current challenge ID is changed
    useEffect(
        () => {
            if (currentChallengeID) {
                console.log("current challenge ID Changed")
                dispatch(UPDATE_CODE_TEMPLATES(currentChallengeDetails.challengeTemplateCode))
            }
        },[currentChallengeID]
    )
    
    // This function will be executed when the challenge starts
    const onChallengeStart = React.useCallback((event)=> {
        dispatch(UPDATE_TABDISPLAY("Console"))
        dispatch(UPDATE_GAME_STATUS(false))
        outputJSXList=[]

        actualInput = currentChallengeDetails.challengeInputFunction()
        expectedOutput = currentChallengeDetails.challengeOutputFunction(actualInput)
        actualOutput = undefined
        //console.log("Started: ", actualInput, expectedOutput)
        setTimeout(() => exec.evaluateCodeExternally(editorLang, editorValue, callerCode, JSON.stringify(actualInput), onChallengeEnd), 100)
    })

    const onChallengeEnd = React.useCallback((Output) => {
        actualOutput = Output
        codeResultValid = (JSON.stringify(expectedOutput) === JSON.stringify(actualOutput)) ? true : false
        //console.log("complete: ", actualOutput, codeResultValid)
        outputJSXList.push(convertOutputJSX({
            input: JSON.stringify(actualInput),
            output: JSON.stringify(actualOutput),
            error: !codeResultValid
        }))

        if (!codeResultValid) {
            outputJSXList.push(<Alert severity="info">Unexpected Output: {JSON.stringify(actualOutput)} , Expected: {JSON.stringify(expectedOutput)}</Alert>)
        }

        dispatch(UPDATE_GAME_STATUS(true))
    })

    // Below functions gets executed when the selection is changed
    const onChallengeSelector = React.useCallback((event) => {
        const value = event.target.value
        dispatch(UPDATE_CURRENT_CHALLENGE({
            challengeID: value
        }))
        actualInput = undefined
        actualOutput = undefined
        codeResultValid = false
    })

    const onChallengeSelectorNext = React.useCallback((event) => {
        const index = find_next_index_challengeList(currentChallengeID)
        const nextChallengeID = logical_op_challengeList[index].challengeID
        dispatch(UPDATE_CURRENT_CHALLENGE({
            challengeID: nextChallengeID
        }))
        actualInput = undefined
        actualOutput = undefined
        codeResultValid = false
    })

    const onChallengeSelectorPrevious = React.useCallback((event) => {
        const index = find_previous_index_challengeList(currentChallengeID)
        const previousChallengeID = logical_op_challengeList[index].challengeID
        dispatch(UPDATE_CURRENT_CHALLENGE({
            challengeID: previousChallengeID
        }))
        actualInput = undefined
        actualOutput = undefined
        codeResultValid = false
    })

    // This function will be executed when the tab changes
    const onTabChange = React.useCallback((event, value)=> {
        dispatch(UPDATE_TABDISPLAY(value))
    })

    return (
        <div className="ChallengePage">
            <div className="ChallengeArea">
                <div className='ChallengeHeader'>
                    <p><strong>Conditional Statement & Logical Operations</strong></p>
                </div>
                <div className="ChallengeInteractionArea_1">
                    <Logical_Op_UI input={actualInput} output={actualOutput}/>
                </div>
                <div className="ChallengeInteractionArea_2">
                    <PlayButton onClick={onChallengeStart}></PlayButton>

                    <Box sx={{ border: 1, borderColor: 'divider' }}>
                        <IconButton aria-label="previous" onClick={onChallengeSelectorPrevious}><NavigateBeforeIcon /></IconButton>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} size="small">
                            <Select
                                id="demo-simple-select-filled"
                                value={currentChallengeID}
                                onChange={onChallengeSelector}
                                >
                                {getChallengeMenuListJSX(logical_op_challengeList)}
                            </Select>
                        </FormControl>
                        <IconButton aria-label="next" onClick={onChallengeSelectorNext}><NavigateNextIcon /></IconButton>
                    </Box>
                </div>
                <Box>
                    <TabContext value={tabDisplay}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList
                            onChange={onTabChange} 
                            aria-label="lab API tabs example">
                                <Tab label="Challenge" value="Challenge" />
                                <Tab label="Console" value="Console" />
                        </TabList>
                        </Box>
                        <TabPanel value="Challenge">
                        <div className="ChallengeDescriptionArea">
                            {currentChallengeDetails.challengeDescriptionFunction()}
                        </div>
                        </TabPanel>
                        <TabPanel value="Console">
                            <Stack sx={{ width: '100%' }} spacing={0.5}>
                                {outputJSXList}
                            </Stack>
                        </TabPanel>
                    </TabContext>
                </Box>
            </div>
            <div className="CodeEditorArea">
                <CodeArea />
            </div>
        </div>
    )

}

export default LogicalOperations

function getChallengeMenuListJSX(logical_op_challengeList) {
    return logical_op_challengeList.map((element) => {
        return <MenuItem value={element.challengeID} key={element.challengeID}>{element.challengeID}</MenuItem>
    })
}

function convertOutputJSX(result) {
    if (result.error) {
        return <Alert severity="error">Input: {result.input} , Output: {result.output}</Alert>
    }
    else {
        return <Alert severity="success">Input: {result.input} , Output: {result.output}</Alert>
    }
    
}
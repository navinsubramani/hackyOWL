// Import the React Components
import React, { useEffect } from "react";

// Import the Redux Components
import { useSelector, useDispatch } from "react-redux";
import {UPDATE_CODE_TEMPLATES} from "./../../features/code-edit-run/codeSlice"
import {UPDATE_TICTACTOE_BOARD_STATE, RESET_TICTACTOE_BOARD_STATE, UPDATE_TICTACTOE_MESSAGE, UPDATE_PLAYER_DETAILS, UPDATE_TABDISPLAY} from "./tictactoeSlice"

// Import the UI Components
import './tictactoe.css'
import { PlayButton } from "../../component/Custom-Buttons";
import TicTacToeGame from "./tictactoeUI"
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

// import the code-edit-run
import CodeArea from "../../features/code-edit-run/code-edit";
import tictactoeLogic from "./tictactoeLogic";


const tictactoeTemplateCode = {
        // Placeholders
        javascript: {
            starterCode: `function move(input)
{
    // input.board provides the board information
    // input.mySymbol provides your play symbol

    // return the index of the board where the next move should be done
    return 0
}`,
            callCode: `move(input)`
            },
        python: {
            starterCode: `def move(input):
    # input["board"] provides the board information
    # input["mySymbol"] provides your play symbol

    # return the index of the board where the next move should be done
    return 0`,
            callCode: `move(input)`
            }}
let message = "Code & Play"
let gameIntervalSession = undefined
let level = "Easy"
var outputJSXList = []

function TicTacToe() {

    const boardState = useSelector((state) => state.tictactoe.boardState)
    const p1 = useSelector((state) => state.tictactoe.p1)
    const p2 = useSelector((state) => state.tictactoe.p2)
    const message = useSelector((state) => state.tictactoe.message)
    const tabDisplay = useSelector((state) => state.tictactoe.tabDisplay)

    const editorValue = useSelector((state) => state.code.editorValue)
    const callerCode = useSelector((state) => state.code.callerCode)
    const editorLang = useSelector((state) => state.code.editorLang)
    
    const dispatch = useDispatch()
    
    // on App Mount
    useEffect(
        () => {
            dispatch(UPDATE_CODE_TEMPLATES(tictactoeTemplateCode))
            dispatch(RESET_TICTACTOE_BOARD_STATE())
        },[]
    )

    // on Game Start
    const onGameStart = React.useCallback((event) => {
        // Reset the board
        outputJSXList = []
        dispatch(RESET_TICTACTOE_BOARD_STATE())

        // Play Game
        console.log("onGameStart")
        const tictactoe = new tictactoeLogic(p1, p2, level)
        gameIntervalSession = setInterval(
            function() {tictactoe.playNextMove(onGameUpdate, onGameEnd, getProgramPerformance, editorValue, callerCode, editorLang) } , 1000 
        )
    })
    
    // Update the Board State
    const onGameUpdate = React.useCallback((boardState) => {
        console.log("onGameUpdate")
        dispatch(UPDATE_TICTACTOE_BOARD_STATE(boardState))
    })

    const getProgramPerformance = React.useCallback((result) => {
        outputJSXList.push(convertOutputJSX(result))
    })

    // on Game End
    const onGameEnd = React.useCallback((msg) => {
        console.log("onGameEnd")
        clearInterval(gameIntervalSession)
        outputJSXList.push(<Alert severity="info">{msg}</Alert>)
        dispatch(UPDATE_TICTACTOE_MESSAGE(msg))
    })

    // on Player Change
    const onPlayerChange = React.useCallback((event, value) => {
        dispatch(UPDATE_PLAYER_DETAILS({
            p1: (value=="X")?"program":"bot",
            p2: (value=="O")?"program":"bot"
        }))
    })

    const onTabChange = React.useCallback((event, value) => {
        dispatch(UPDATE_TABDISPLAY(value))
    })

    //console.log("tictactoe refreshed..", boardState, message)

    return(
        <div className="ChallengePage">
            <div className="ChallengeArea">
                <div className='ChallengeHeader'>
                    <p><strong>Tic Tac Toe</strong></p>
                </div>
                <div className="ChallengeInteractionArea_1">
                    <TicTacToeGame
                        boardState = {boardState}
                        p1={p1}
                        p2={p2}
                        message={message} 
                    />
                </div>
                <div className="ChallengeInteractionArea_2">
                    <PlayButton onClick={onGameStart}></PlayButton>

                    <ToggleButtonGroup
                            color="primary"
                            value={(p1=="program")?"X":"O"}
                            exclusive
                            onChange={onPlayerChange}
                            aria-label="Platform"
                            >
                            <ToggleButton value="X">Play X</ToggleButton>
                            <ToggleButton value="O">Play O</ToggleButton>
                    </ToggleButtonGroup>

                    <ToggleButtonGroup
                            color="primary"
                            value={level}
                            exclusive
                            aria-label="Platform"
                            >
                            <ToggleButton value="Easy">Easy</ToggleButton>
                            <ToggleButton value="Medium" disabled="True">Medium</ToggleButton>
                    </ToggleButtonGroup>
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
                            {getChallengeDescriptionJSX()}
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

export default TicTacToe

function getChallengeDescriptionJSX() {
    return (
        <p className="ChallengeDescriptionArea">
            <strong>Challenge</strong><br/>
            Your program must play the TicTacToe as "X" and win the TicTacToe Game<br/>
            <br/>
            <strong>Game Rule</strong><br/>
            Tic Tac Toe is a two-player game where players take turns placing their X or O symbol on a 3x3 grid. The objective of the game is to get three of your symbols in a row, either horizontally, vertically, or diagonally, while blocking your opponent from doing the same.<br/>
            <br/>
            <strong>Program Rule</strong><br/>
            1. Implement you main code within the given function definition<br/>
            2. On each call, the function will be provided with the tictactoe board information as a array of strings containing 9 elements representing the each cell value ('x', 'o' & '')<br/>
            3. Expected return from the function is a index where your program wants to make the next move (i.e., number between 0-8)
        </p>
    )
}

function convertOutputJSX(result) {
    console.log(result)
    if (result.error) {
        return <Alert severity="error">
        Input: {result.input} 
        Output: {JSON.stringify(result.output)}
        </Alert>
    }
    else {
        return <Alert severity="success">
            Input: {result.input} 
            Output: {result.output}
            </Alert>
    }
    
}
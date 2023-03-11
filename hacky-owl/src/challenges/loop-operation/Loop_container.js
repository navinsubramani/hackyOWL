// Import the React Components
import React, { useEffect } from "react";

// Import the Redux Components


// Import the UI components
import { PlayButton } from "../../component/Custom-Buttons";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Stack from '@mui/material/Stack';

// Import the Code-edit
import CodeArea from "../../features/code-edit-run/code-edit";

const outputJSXList = []

function LoopOperations() {

    const tabDisplay = "Challenge"

    // This function will be executed on the App mount
    useEffect(
        () => {

        },[]
    )
    
    // This function will be executed when the challenge starts
    const onChallengeStart = React.useCallback((event)=> {

    })

    // This function will be executed when the tab changes
    const onTabChange = React.useCallback((event)=> {

    })

    return (
        <div className="ChallengePage">
            <div className="ChallengeArea">
                <div className='ChallengeHeader'>
                    <p><strong>Loop Operations</strong></p>
                </div>
                <div className="ChallengeInteractionArea_1">

                </div>
                <div className="ChallengeInteractionArea_2">
                    <PlayButton onClick={onChallengeStart}></PlayButton>

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

export default LoopOperations

function getChallengeDescriptionJSX() {

}
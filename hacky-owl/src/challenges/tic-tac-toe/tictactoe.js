// Import the React Components
import React, { useEffect } from "react";

// Import the Redux Components
import { useSelector, useDispatch } from "react-redux";
import {UPDATE_CODE_TEMPLATES} from "./../../features/code-edit-run/codeSlice"
import {UPDATE_TICTACTOE_BOARD_STATE, RESET_TICTACTOE_BOARD_STATE, UPDATE_TICTACTOE_MESSAGE} from "./tictactoeSlice"

// Import the UI Components
import './tictactoe.css'
import { PlayButton } from "../../component/Custom-Buttons";
import TicTacToeGame from "./tictactoeUI"

// import the code-edit-run
import CodeEditRun from "../../features/code-edit-run/code-edit-run";
import tictactoeLogic from "./tictactoeLogic";



const tictactoeTemplateCode = {
        // Placeholders
        javascript: {
            starterCode: `function move(board=[])
{ 
    return move
}`,
            headCode: ``,
            callCode: `move()`
            },
        python: {
            starterCode: `def sum(board=[]):
    return move`,
            headCode: ``,
            callCode: `move()`
            }}
let message = "Code & Play"

function TicTacToe() {

    const boardState = useSelector((state) => state.tictactoe.boardState)
    const p1 = useSelector((state) => state.tictactoe.p1)
    const p2 = useSelector((state) => state.tictactoe.p2)
    const message = useSelector((state) => state.tictactoe.message)
    
    const dispatch = useDispatch()
    
    // on App Mount
    useEffect(
        () => {
            dispatch(UPDATE_CODE_TEMPLATES(tictactoeTemplateCode))
        },[]
    )

    // on Game Start
    const onGameStart = React.useCallback((event) => {
        // Reset the board
        dispatch(RESET_TICTACTOE_BOARD_STATE())

        // Play Game
        console.log("Game Started...")
        const tictactoe = new tictactoeLogic(p1, p2)
        let newPromise = new Promise(
            (resolve, reject) => {
                resolve(tictactoe.play(
                    updateBoardState
                ))
            })
        newPromise.then(
            message => {
                console.log(message)
                dispatch(UPDATE_TICTACTOE_MESSAGE(message))
            }
        ).catch(console.log)
    })
    
    // Update the Board State
    const updateBoardState = React.useCallback((boardState) => {
        dispatch(UPDATE_TICTACTOE_BOARD_STATE(boardState))
    })

    //console.log(boardState)

    return(
        <div className="ChallengePage">
            <div className="ChallengeArea">
                <div className='ChallengeHeader'>
                    <PlayButton onClick={onGameStart}/>
                </div>
                <div className="ChallengeInteractionArea">
                    <TicTacToeGame
                        boardState = {boardState}
                        p1={p1}
                        p2={p2}
                        message={message} 
                    />
                </div>
                <div className="ChallengeAboutArea">

                </div>
            </div>

            <CodeEditRun />
        </div>
    )

}

export default TicTacToe
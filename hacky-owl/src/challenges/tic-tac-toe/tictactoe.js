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
    return 0
}`,
            callCode: `move(input)`
            },
        python: {
            starterCode: `def move(board=[]):
    return 0`,
            callCode: `move(input)`
            }}
let message = "Code & Play"
let gameIntervalSession = undefined

function TicTacToe() {

    const boardState = useSelector((state) => state.tictactoe.boardState)
    const p1 = useSelector((state) => state.tictactoe.p1)
    const p2 = useSelector((state) => state.tictactoe.p2)
    const message = useSelector((state) => state.tictactoe.message)

    const editorValue = useSelector((state) => state.code.editorValue)
    const callerCode = useSelector((state) => state.code.callerCode)
    const editorLang = useSelector((state) => state.code.editorLang)
    
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
        console.log("onGameStart")
        const tictactoe = new tictactoeLogic(p1, p2)
        gameIntervalSession = setInterval(
            function() {tictactoe.playNextMove(onGameUpdate, onGameEnd, editorValue, callerCode, editorLang) } , 1000 
        )
    })
    
    // Update the Board State
    const onGameUpdate = React.useCallback((boardState) => {
        console.log("onGameUpdate")
        dispatch(UPDATE_TICTACTOE_BOARD_STATE(boardState))
    })

    // on Game End
    const onGameEnd = React.useCallback((msg) => {
        console.log("onGameEnd")
        clearInterval(gameIntervalSession)
        console.log(msg)
        dispatch(UPDATE_TICTACTOE_MESSAGE(msg))
    })

    console.log("tictactoe refreshed..", boardState, message)

    return(
        <div className="ChallengePage">
            <div className="ChallengeArea">
                <div className="ChallengeInteractionArea">
                    <TicTacToeGame
                        boardState = {boardState}
                        p1={p1}
                        p2={p2}
                        message={message} 
                    />
                </div>
                <div className='ChallengeHeader'>
                    <PlayButton onClick={onGameStart}/>
                </div>
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
            </div>
            <div className="CodeEditorArea">
                <CodeEditRun />
            </div>
            
        </div>
    )

}

export default TicTacToe
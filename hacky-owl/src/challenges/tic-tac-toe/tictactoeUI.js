import React from "react";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import './tictactoeUI.css'


function TicTacToeGame(props) {

    const boardState = props.boardState

    // Style the Cells
    let cellClassName = ["cell1", "cell2", "cell3", "cell4", "cell5", "cell6", "cell7", "cell8", "cell9"]
    // Style the x & o cells
    cellClassName = cellClassName.map(
        (element, i) => {
            if(boardState[i]==='x') {
                return element+" xCell"
            }
            else if(boardState[i]==='o') {
                return element+" oCell"
            }
            else {
                return element
            }
        }
    )
    // Style the winner cells
    let winnerPatterArray = winnerPattern(boardState)

    winnerPatterArray.forEach(
        (element) => {
            cellClassName[element] = cellClassName[element] + " winnerCell"
        }
    )

    //console.log(cellClassName)


    return(
        <div className="tictactoe">
            <div className="board" id="board">
                <div className="row1">
                    <div className={cellClassName[0]} id="1">
                        {boardState[0]}
                    </div>
                    <div className={cellClassName[1]} id="2">
                        {boardState[1]}
                    </div>
                    <div className={cellClassName[2]} id="3">
                        {boardState[2]}
                    </div>
                </div>
                <div className="row2">
                    <div className={cellClassName[3]} id="4">
                        {boardState[3]}
                    </div>
                    <div className={cellClassName[4]} id="5">
                        {boardState[4]}
                    </div>
                    <div className={cellClassName[5]} id="6">
                        {boardState[5]}
                    </div>
                </div>
                <div className="row3">
                    <div className={cellClassName[6]} id="7">
                        {boardState[6]}
                    </div>
                    <div className={cellClassName[7]} id="8">
                        {boardState[7]}
                    </div>
                    <div className={cellClassName[8]} id="9">
                        {boardState[8]}
                    </div>
                </div>
            </div>
        </div>

    )
}

function winnerPattern(boardState) {
    const winningPattern = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        const board = boardState  
        
        for (let pattern of winningPattern) {
            let winner = ""
            if(
                (board[pattern[0]]===board[pattern[1]]) &&
                (board[pattern[1]]===board[pattern[2]]) &&
                (board[pattern[0]]!=="")) {
                    return pattern
                }
        }
        return []

}

export default TicTacToeGame
import executeProgram from "../../features/code-edit-run/run-program"


class tictactoeLogic {
    constructor(p1, p2, level) {
        this.boardState = ["", "", "", "", "", "", "", "", ""]
        this.p1 = p1
        this.p2 = p2
        this.level = level
        if(this.p1 === "bot") {
            this.bot = 'x'
            this.program = 'o'
        }
        else {
            this.bot = 'o'
            this.program = 'x'            
        }

        // True means p1
        this.lastMove = ""
        this.currentMove = this.p1

        this.executeProgram = new executeProgram()

        this.result = {
            noError: true,
            message: "Game is a draw",
            noWinner: true,
            winner: ""
        }
        //console.log(this)
    }

    playNextMove(f_onEachMove, f_onGameOver, f_ProgramPerformance, code, callerCode, lang) {
        
        //console.log("current move: ", this.currentMove)

        // skip the run if waiting for previous move to be complete
        if(this.lastMove === this.currentMove) {
            console.log("wait")
            return undefined
        }

        this.lastMove = this.currentMove
        // check if the game can be played
        if (this.isBoardNotComplete() && this.result.noError && this.result.noWinner) {
            
            // Bot Game
            if (this.currentMove === "bot") {
                
                // Play the best move
                let move = this.bestBotMove()
                this.processMove(move, this.bot)
                
                // Since bot has played the move synchronously
                this.currentMove = "program"

                // Update board
                f_onEachMove([...this.boardState])

            }

            // Program Game
            else if (this.currentMove === "program") {
                let input = JSON.stringify({board: this.boardState, mySymbol: this.program})
                this.executeProgram.evaluateCodeExternally(lang, code, callerCode, input,
                    (output) => {
                        console.log("program evaluated: ", output)
                        this.processMove(output, this.program)
                        this.currentMove = "bot"

                        f_ProgramPerformance({
                            input: input,
                            output: output,
                            error: !this.result.noError
                        })

                        f_onEachMove([...this.boardState])
                        }
                    )
            }

            else {
                console.log("neither bot not program is playing...")
            }
        
        }

        // game is complete
        else {
            f_onGameOver(this.result.message, this.result.noError, this.result.noWinner)
        }
    }

    // Return [True: if Game Over, P1/P2: Winner]
    isGameCompleteByWinner() {
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
        const board = this.boardState      
        
        for (let pattern of winningPattern) {
            let winner = ""
            if(
                (board[pattern[0]]===board[pattern[1]]) &&
                (board[pattern[1]]===board[pattern[2]]) &&
                (board[pattern[0]]!=="")) {

                    if(board[pattern[0]] === 'x') {
                        winner = this.p1
                    }
                    else{
                        winner = this.p2
                    }

                    return [true, winner]
                }
        }
        return [false, ""]
    }

    // Return True if board is full
    isBoardNotComplete() {
        if (this.getEmptyCell().length===0) {
            return false
        }
        return true
    }

    //Return the Array of Empty Cell Index
    getEmptyCell() {
        let emptyCellIndex = []
        this.boardState.forEach((element, i) => {
            if(element==="") {
                emptyCellIndex.push(i)
            }
        });
        return emptyCellIndex
    }

    // Play the Best Bot Move by checking all cases
    processMove(move, playerSymbol) {

        // Check if Valid Move
        if(this.isValidMove(move)) {
            
            // Update the board state
            this.boardState[move] = playerSymbol

            // Check if someone won
            let result = this.isGameCompleteByWinner()
            if (result[0]) {
                // Someone Won
                this.result.noWinner = false
                this.result.Winner = result[1]
                this.result.message = playerSymbol.toUpperCase()
            }
            
        }
        else {
            console.log("Invalid Move: ", move)
            this.result.message = "Unexpected Move from '" + playerSymbol.toUpperCase() + "' : " + move 
            this.result.noError = false
        }
    }

    //Get Computer Move: Retuns cell Index
    bestBotMove() {
        let moveOptions = this.getEmptyCell()
        let i = Math.random()*moveOptions.length
        i = Math.round(i)
        i = (i >= moveOptions.length) ? 0 : i

        return moveOptions[i]
    }

    // Check if the Given Move is Valid. If not, end the game.
    isValidMove(move) {
        if (this.getEmptyCell().find((element)=>element===move) !== undefined) {
            return true
        }
        return false
    }
}

export default tictactoeLogic
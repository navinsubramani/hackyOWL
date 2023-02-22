import executeProgram from "../../features/code-edit-run/run-program"


class tictactoeLogic {
    constructor(p1, p2) {
        this.boardState = ["", "", "", "", "", "", "", "", ""]
        this.p1 = p1
        this.p2 = p2
        this.executeProgram = new executeProgram()

        if(this.p1 === "bot") {
            this.bot = 'x'
            this.program = 'o'
        }
        else {
            this.bot = 'o'
            this.program = 'x'            
        }
        // True means p1
        this.nextMove = this.p1
    }

    play(f_onEachMove) {

        let noError = true
        let message = "Game is a draw"
        let noWinner = true
        let Winner = ""

        while(this.isBoardNotComplete() && noError && noWinner) {

            if (this.nextMove === "bot") {
                // Play the best move
                let move = this.bestBotMove()

                // Check if Valid Move
                if(this.isValidMove(move)) {
                    
                    // Update the board state
                    this.boardState[move] = this.bot

                    // Check if someone won
                    let result = this.isGameCompleteByWinner()
                    if (result[0]) {
                        // Someone Won
                        noWinner = false
                        Winner = result[1]
                        message = "Winner is " + this.bot
                    }

                    this.nextMove = "program"
                    
                }
                else {
                    console.log("Invalid Move: ", move)
                    message = "Unexpected Move: " + move 
                    noError = false
                }

            }
            else {
                // Play the best move
                let move = this.bestBotMove()

                // Check if Valid Move
                if(this.isValidMove(move)) {
                    
                    // Update the board state
                    this.boardState[move] = this.program

                    // Check if someone won
                    let result = this.isGameCompleteByWinner()
                    if (result[0]) {
                        // Someone Won
                        noWinner = false
                        Winner = result[1]
                        message = "Winner is " + this.program
                    }

                    this.nextMove = "bot"
                }
                else {
                    console.log("Invalid Move: ", move)
                    message = "Unexpected Move: " + move 
                    noError = false
                }
            }

            //console.log(this.boardState, this.nextMove)
            f_onEachMove([...this.boardState])

        }


        return message
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
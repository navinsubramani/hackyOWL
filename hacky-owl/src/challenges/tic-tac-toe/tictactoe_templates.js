
const tictactoe_Templates = {
    // Placeholders
    javascript: {
        starterCode: 
`function move(input)
{
// input.board provides the board information
// input.mySymbol provides your play symbol

// return the index of the board where the next move should be done
return 0
}`,
        callCode: 
`move(input)`,
        exampleCode:
`function move(input)
{
    // input.board provides the board information
    // input.mySymbol provides your play symbol
    move = findEmptyCell(input.board)

    // return the index of the board where the next move should be done
    return move[0]
}

function findEmptyCell(board=[]) {
  let emptyCellIndex = []
  board.forEach((element, i) => {
        if(element==="") {
        emptyCellIndex.push(i)
    }
  })
  return emptyCellIndex
}`
        },
    python: {
        starterCode:
`def move(input):
    # input["board"] provides the board information
    # input["mySymbol"] provides your play symbol

    # return the index of the board where the next move should be done
    return 0`,
        callCode:
`move(input)`,
        exampleCode:
`def move(input):
    # input["board"] provides the board information
    # input["mySymbol"] provides your play symbol
    pos = findEmptyCells(input["board"])  

    # return the index of the board where the next move should be done
    return pos[0]

def findEmptyCells(board):
    emptyCells = []
    for (i, cell) in enumerate(board):
        if cell == "":
            emptyCells.append(i)
    return emptyCells`
        }}

export default tictactoe_Templates
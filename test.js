var myBoard = new GameBoard();
console.log(myBoard)


//TEST FOR ROW GAME OVER - True
console.log('=======================')
console.log('Game Over Check for Rows - True')
console.log('=======================')
var myBoard = new GameBoard();
// console.log('Board: ', myBoard)
// console.log('=======================')
myBoard.placeXorO(0, 0) //- X
myBoard.placeXorO(1, 1) //- O
myBoard.placeXorO(0, 1) //- X
myBoard.placeXorO(2, 1) //- O
myBoard.placeXorO(0, 2) //- X
// console.log('=======================')
 console.log('Board - ', myBoard.board)
// console.log('=======================')
//debugger;
console.log('Expected: True')
console.log('Game Over (Rows) - ', myBoard.winCheckRow())
console.log('Expected: True')
console.log('Game Over Check - ', myBoard.gameOverCheck())


//TEST FOR ROW GAME OVER - False
console.log('=======================')
console.log('Game Over Check for Rows - False')
// console.log('=======================')
var myBoard = new GameBoard();
// console.log('Board: ', myBoard)
// console.log('=======================')
myBoard.placeXorO(0, 0) //-X
myBoard.placeXorO(0, 1) // - O
myBoard.placeXorO(0, 2) //-X
console.log('Board - ', myBoard.board)
// console.log('=======================')
//debugger;
console.log('Expected: False')
console.log('Game Over - ', myBoard.winCheckRow())
console.log('Expected: False')
console.log('Game Over Check - ', myBoard.gameOverCheck())


//TEST FOR ROW GAME OVER - False
console.log('=======================')
console.log('Game Over Check for Rows - Empty Table - False')
var myBoard = new GameBoard();
// console.log('Board: ', myBoard)
// console.log('=======================')
// console.log('Board - ', myBoard.board)
// console.log('=======================')
//debugger;
console.log('Expected: False')
console.log('Game Over - ', myBoard.winCheckRow())
console.log('Expected: False')
console.log('Game Over Check - ', myBoard.gameOverCheck())


console.log('*************************************************')
console.log('*************************************************')
console.log('*************************************************')

//TEST FOR COL GAME OVER - Expected True

console.log('=======================')
console.log('Game Over Check for Col - True')
// console.log('=======================')
var myBoard = new GameBoard();
// console.log('Board: ', myBoard)
// console.log('=======================')
myBoard.placeXorO(0, 0) //X
myBoard.placeXorO(0,1)
myBoard.placeXorO(1, 0)//X
myBoard.placeXorO(1,1)
myBoard.placeXorO(2, 0)//X
// console.log('=======================')
console.log('Board - ', myBoard.board)
// console.log('=======================')
//debugger;
console.log('Expected: True')
console.log('Game Over - ', myBoard.winCheckCol())
console.log('Expected: True')
console.log('Game Over Check - ', myBoard.gameOverCheck())


//TEST FOR COL GAME OVER - Expected False -

console.log('=======================')
console.log('Game Over Check for Cols - Populated - False')
// console.log('=======================')
var myBoard = new GameBoard();
//console.log('Board: ', myBoard)
myBoard.placeXorO(0, 0)
myBoard.placeXorO(1, 0)
myBoard.placeXorO(2, 0)
// console.log('=======================')
console.log('Board - ', myBoard.board)
// console.log('=======================')
//debugger;
console.log('Expected: False')
console.log('Game Over - ', myBoard.winCheckCol())
console.log('Expected: False')
console.log('Game Over Check - ', myBoard.gameOverCheck())



//TEST FOR COL GAME OVER - Expected False

console.log('=======================')
console.log('Game Over Check for Cols - Empty Board - False')
// console.log('=======================')
var myBoard = new GameBoard();
//console.log('Board: ', myBoard)
myBoard.placeXorO(0, 0)
myBoard.placeXorO(1, 0)
myBoard.placeXorO(2, 0)
// console.log('=======================')
// console.log('Board - ', myBoard.board)
// console.log('=======================')
// debugger;
console.log('Expected: False')
console.log('Game Over - ', myBoard.winCheckCol())
console.log('Expected: False')
console.log('Game Over Check - ', myBoard.gameOverCheck())



console.log('*************************************************')
console.log('*************************************************')
console.log('*************************************************')

//TEST FOR Diagonal GAME OVER - Expected True

console.log('=======================')
console.log('Game Over Check for Diagonal - True')
// console.log('=======================')
var myBoard = new GameBoard();
// console.log('Board: ', myBoard)
// console.log('=======================')
myBoard.placeXorO(0, 0)
myBoard.placeXorO(1, 1)
myBoard.placeXorO(2, 2)
// console.log('=======================')
console.log('Board - ', myBoard.board)
// console.log('=======================')
//debugger;
console.log('Expected: True')
console.log('Game Over - ', myBoard.winCheckDiagonal())
console.log('Expected: True')
console.log('Game Over Check - ', myBoard.gameOverCheck())



//TEST FOR Diagonal GAME OVER - Expected True

console.log('=======================')
console.log('Game Over Check for Diagonal - Forward - True')
// console.log('=======================')
var myBoard = new GameBoard();
// console.log('Board: ', myBoard)
// console.log('=======================')
myBoard.placeXorO(0, 2) //X
myBoard.placeXorO(0, 1)
myBoard.placeXorO(1, 1) //X
myBoard.placeXorO(0, 0)
myBoard.placeXorO(2, 0) //X


// console.log('=======================')
console.log('Board - ', myBoard.board)
// console.log('=======================')
//debugger;
console.log('Expected: True')
console.log('Game Over - ', myBoard.winCheckDiagonal())
console.log('Expected: True')
console.log('Game Over Check - ', myBoard.gameOverCheck())


//TEST FOR Diagonal GAME OVER - Expected True -

console.log('=======================')
console.log('Game Over Check for Diagonal - Reverse - True')
// console.log('=======================')
var myBoard = new GameBoard();
//console.log('Board: ', myBoard)
myBoard.placeXorO(0, 0) //X
myBoard.placeXorO(0, 2)
myBoard.placeXorO(1, 1) //X
myBoard.placeXorO(1, 2)
myBoard.placeXorO(2, 2) //X
// console.log('=======================')
console.log('Board - ', myBoard.board)
// console.log('=======================')
//debugger;
console.log('Expected: True')
console.log('Game Over - ', myBoard.winCheckDiagonal())
console.log('Expected: True')
console.log('Game Over Check - ', myBoard.gameOverCheck())


//TEST FOR Diagonal GAME OVER - Expected False -

console.log('=======================')
console.log('Game Over Check for Diagonal - Reverse - False')
// console.log('=======================')
var myBoard = new GameBoard();
//console.log('Board: ', myBoard)
myBoard.placeXorO(0, 0)
myBoard.placeXorO(1, 1)
myBoard.placeXorO(2, 2)
// console.log('=======================')
console.log('Board - ', myBoard.board)
// console.log('=======================')
//debugger;
console.log('Expected: False')
console.log('Game Over - ', myBoard.winCheckDiagonal())
console.log('Expected: False')
console.log('Game Over Check - ', myBoard.gameOverCheck())



//TEST FOR Diagonal GAME OVER - Expected False -

console.log('=======================')
console.log('Game Over Check for Diagonal - Empty Table - False')
// console.log('=======================')
var myBoard = new GameBoard();
//console.log('Board: ', myBoard)
// console.log('=======================')
console.log('Board - ', myBoard.board)
// console.log('=======================')
//debugger;
console.log('Expected: False')
console.log('Game Over - ', myBoard.winCheckDiagonal())
console.log('Expected: False')
console.log('Game Over Check - ', myBoard.gameOverCheck())


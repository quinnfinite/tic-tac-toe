//TESTS I BUILT TO USE IN SNIPPETS

var myBoard = new GameBoard();
console.log(myBoard)


//TEST FOR ROW GAME OVER - True
console.log('=======================')
console.log('Game Over Check for Rows - True')
console.log('=======================')
var myBoard = new GameBoard();
// console.log('Board: ', myBoard)
// console.log('=======================')
myBoard.placeXorO('X', 0, 0)
myBoard.placeXorO('X', 0, 1)
myBoard.placeXorO('X', 0, 2)
// console.log('=======================')
// console.log('Board - ', myBoard.board)
// console.log('=======================')
//debugger;
console.log('Expected: True')
console.log('Game Over - ', myBoard.winCheckRow())


//TEST FOR ROW GAME OVER - False
console.log('=======================')
console.log('Game Over Check for Rows - False')
// console.log('=======================')
// var myBoard = new GameBoard();
// console.log('Board: ', myBoard)
// console.log('=======================')
myBoard.placeXorO('X', 0, 0)
myBoard.placeXorO('X', 0, 1)
myBoard.placeXorO('O', 0, 2)
// console.log('Board - ', myBoard.board)
// console.log('=======================')
//debugger;
console.log('Expected: False')
console.log('Game Over - ', myBoard.winCheckRow())

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
myBoard.placeXorO('X', 0, 0)
myBoard.placeXorO('X', 1, 0)
myBoard.placeXorO('X', 2, 0)
// console.log('=======================')
console.log('Board - ', myBoard.board)
// console.log('=======================')
//debugger;
console.log('Expected: True')
console.log('Game Over - ', myBoard.winCheckCol())


//TEST FOR COL GAME OVER - Expected False -

console.log('=======================')
console.log('Game Over Check for Cols - Populated - False')
// console.log('=======================')
var myBoard = new GameBoard();
//console.log('Board: ', myBoard)
myBoard.placeXorO('X', 0, 0)
myBoard.placeXorO('X', 1, 0)
myBoard.placeXorO('O', 2, 0)
// console.log('=======================')
console.log('Board - ', myBoard.board)
// console.log('=======================')
debugger;
console.log('Expected: False')
console.log('Game Over - ', myBoard.winCheckCol())

console.log('=======================')
console.log('Game Over Check for Cols - Empty Board - False')
// console.log('=======================')
var myBoard = new GameBoard();
//console.log('Board: ', myBoard)
myBoard.placeXorO('X', 0, 0)
myBoard.placeXorO('X', 1, 0)
myBoard.placeXorO('O', 2, 0)
// console.log('=======================')
// console.log('Board - ', myBoard.board)
// console.log('=======================')
// debugger;
console.log('Expected: False')
console.log('Game Over - ', myBoard.winCheckCol())
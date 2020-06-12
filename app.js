document.getElementById('heading').innerHTML = 'Tic Tac Toe';

//GAMEBOARD OBJECT

class GameBoard {
  constructor(){
    this.rowOne = [ , , ,];
    this.rowTwo = [ , , ,];
    this.rowThree = [ , , ,];
    this.board = [this.rowOne, this.rowTwo, this.rowThree]
    this.playerOne = 'X';
    this.playerTwo = 'O';
    this.currentPlayer = this.playerOne;
    console.log('Game Board is Ready')
    console.log(`${this.currentPlayer}'s turn`)
  }


  //placement
  placeXorO(row, index){
    var placement = this.board[row][index]
    if (!placement) {
      this.board[row][index] = this.currentPlayer;
      if (this.gameOverCheck()) {
        console.log('Game Over - Start a new game')
      } else {
        console.log('Board : ', this.board)
        this.toggleCurrentPlayer();
        console.log(`${this.currentPlayer}'s turn`)
      }
    } else {
      console.log('There is already a marker there')
      console.log(`It is still your turn player ${this.currentPlayer}`)
    }

  }
  //toggle currentPlayer
  toggleCurrentPlayer(){
    if (this.currentPlayer === this.playerOne) {
      this.currentPlayer = this.playerTwo;
    } else {
      this.currentPlayer = this.playerOne;
    }
  }
  //check for win or tie
  winCheckRow(){
    //check each row for three straight characters
    //iterate over each row
    var gameOver = false;
    for (var row of this.board) {
      //iterate through each column in the row
      //keep track of what the first item is
      var mark = row[0];
      var count = 0;
      for(var col of row) {
        if(col === mark) {
          count++;
        }
      }
      //if count is === 3 -- game over
      if(count === 3) {
        return gameOver = true;
      }
    }
    return gameOver;
  }
  //winCheck on columns
  winCheckCol(){
    //iterate over a single row
    //for each index in that row, check the same index at each other row
    //if they are all the same character
    //game is over
    var gameOver = false;
    for (var i = 0; i < this.rowOne.length; i++) {
      if(this.rowOne[i] !== undefined && this.rowOne[i] === this.rowTwo[i] && this.rowOne[i] === this.rowThree[i]) {
        return gameOver = true;
      }
    }
    return gameOver;
  }

  winCheckDiagonal() {
    var gameOver = false;

    if(this.rowOne[0] !== undefined && this.rowOne[0] === this.rowTwo[1] && this.rowOne[0] === this.rowThree[2]) {
      return gameOver = true;
    }

    if(this.rowOne[2] !== undefined && this.rowOne[2] === this.rowTwo[1] && this.rowOne[2] === this.rowThree[0]) {
      return gameOver = true;
    }

    return gameOver;
  }

  //game reset
  gameOverCheck(){
    var gameOver = false;
    var rowGameOver = this.winCheckRow();
    var colGameOver = this.winCheckCol();
    var diagGameOver = this.winCheckDiagonal();

    if(rowGameOver || colGameOver || diagGameOver) {
      //console.log('Game Over');
      gameOver = true;
    }
    return gameOver;
  }
}

//RENDER GAMEBOARD TO SCREEN
var ticTacToe = new GameBoard();
var boardElement = document.createElement('div');
//for each space in the board, add something to the dom
console.log(ticTacToe);
for (var row of ticTacToe.board) {
  //render a row
  var rowElement = document.createElement('div');
  rowElement.className = 'row'
  for (var col of row) {
    //render a column
    var colElement = document.createElement('div')
    colElement.innerHTML = 'X'
    colElement.className = 'col'
    rowElement.append(colElement)
  }
  boardElement.append(rowElement)

}
//var row = document.createElement('div').innerHTML = 'BLANK'
document.getElementById('game-board').append(boardElement)
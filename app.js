document.getElementById('heading').innerHTML = 'Tic Tac Toe';

//GAMEBOARD OBJECT

class GameBoard {
  constructor(){
    this.rowOne = [ , , ,];
    this.rowTwo = [ , , ,];
    this.rowThree = [ , , ,];
    this.board = [this.rowOne, this.rowTwo, this.rowThree]
    this.AvailableSpaces = 9;
    this.playerOne = 'X';
    this.playerTwo = 'O';
    this.currentPlayer = this.playerOne;
    this.gameOver = false;
    this.renderBoard();
    console.log('Game Board is Ready')
    console.log(`${this.currentPlayer}'s turn`)
  }
  //RENDER GAMEBOARD TO SCREEN
  renderBoard () {
    //if board is already rendered...remove it
    var existingBoard = document.getElementById('game-board')
    if (existingBoard) {
      existingBoard.remove();
    }
    //create new board
    var boardElement = document.createElement('div');
    boardElement.id = 'game-board'
    //for each space in the board, add something to the dom
    var rowCounter = 0;
    for (var row of this.board) {
      //render a row
      var rowElement = document.createElement('div');
      rowElement.className = 'row';
      rowElement.classList.add(rowCounter++);
      var colCounter = 0;
      for (var col of row) {
        //render a column
        var colElement = document.createElement('div')
        colElement.innerHTML = col || '';
        colElement.className = 'col';
        colElement.classList.add(colCounter++);
        colElement.addEventListener('click', function() {
          var row = this.parentElement.classList[1]; //row
          var index = this.classList[1]; //index
          ticTacToe.placeXorO(row, index)
        });
        rowElement.append(colElement)
      }
      boardElement.append(rowElement)
    }
    document.getElementById('game-container').append(boardElement)
  }

  //placement
  placeXorO(row, index){
    var placement = this.board[row][index]
    if (this.gameOver) {
      window.alert('The Game is Over. Start a New Game');
      console.log(`Current Player: ${this.currentPlayer}`)
      return;
    }
    if (!placement) {
      this.board[row][index] = this.currentPlayer;
      this.renderBoard();
      this.AvailableSpaces--;
      if (!this.gameOverCheck()) {
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
    //var gameOver = false;
    for (var row of this.board) {
      //iterate through each column in the row
      //keep track of what the first item is
      var mark = row[0];
      var count = 0;
      for(var col of row) {
        if(col === mark && mark !== undefined) {
          count++;
        }
      }
      //if count is === 3 -- game over
      if(count === 3) {
        this.gameOver = true;
      }
    }
    return this.gameOver;
  }
  //winCheck on columns
  winCheckCol(){
    //iterate over a single row
    //for each index in that row, check the same index at each other row
    //if they are all the same character
    //game is over
    // var gameOver = false;

    for (var i = 0; i < this.rowOne.length; i++) {
      if(this.rowOne[i] !== undefined && this.rowOne[i] === this.rowTwo[i] && this.rowOne[i] === this.rowThree[i]) {
        return this.gameOver = true;
      }
    }
    return this.gameOver;
  }

  winCheckDiagonal() {
    //var gameOver = false;

    if(this.rowOne[0] !== undefined && this.rowOne[0] === this.rowTwo[1] && this.rowOne[0] === this.rowThree[2]) {
      return this.gameOver = true;
    }

    if(this.rowOne[2] !== undefined && this.rowOne[2] === this.rowTwo[1] && this.rowOne[2] === this.rowThree[0]) {
      return this.gameOver = true;
    }

    return this.gameOver;
  }
  allSpacesAreTaken() {
    if (this.AvailableSpaces === 0) {
      return true;
    } else {
      return false;
    }
    //crete popup that says the game is over due to a tie
    //give option to start a new game
  }
  //game reset
  gameOverCheck(){
    var rowGameOver = this.winCheckRow();
    var colGameOver = this.winCheckCol();
    var diagGameOver = this.winCheckDiagonal();
    var tie = this.allSpacesAreTaken();
    if (tie) {
      this.gameOver = true;
      window.alert('All Spaces Are Taken. The Game Ends in a Tie. Start a New Game')
    } else if (rowGameOver || colGameOver || diagGameOver) {
      window.alert(`${this.currentPlayer} wins!!! Start a New Game`)
      this.gameOver = true;
    }
    return this.gameOver;
  }
}


// //RENDER GAMEBOARD TO SCREEN

var ticTacToe = new GameBoard();

var newGameButton = document.createElement('button')
newGameButton.innerHTML = 'New Game';
newGameButton.addEventListener('click', () => {
  ticTacToe = new GameBoard()
})
document.body.appendChild(newGameButton)
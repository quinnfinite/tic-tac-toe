//GAMEBOARD OBJECT

class GameBoard {
  constructor(){
    this.rowOne = [ , , ,];
    this.rowTwo = [ , , ,];
    this.rowThree = [ , , ,];
    this.board = [this.rowOne, this.rowTwo, this.rowThree]
    this.AvailableSpaces = 9;
    this.playerOne = 'X';
    this.playerOneName = prompt('What is your name, player One?');
    this.playerTwoName = prompt('What is your name, player Two?');
    this.playerTwo = 'O';
    this.currentPlayer = this.playerOne;
    this.playerNames = {X: this.playerOneName, O: this.playerTwoName};
    this.gameOver = false;
    this.lastWinner = '';
    this.winningHistory = {X: 0, O:0};
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
      document.getElementById('player-names-container').remove();
      document.getElementById('current-player').remove()
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
    var gameContainer = document.getElementById('game-container');
    //Append Players
    var playerNamesContainer = document.createElement('div');
    playerNamesContainer.id = 'player-names-container';
    gameContainer.append(playerNamesContainer)
    var playerOne = document.createElement('h2');
    var playerTwo = document.createElement('h2');
    playerOne.className ='player-name';
    playerTwo.className = 'player-name';
    playerOne.innerHTML = `${this.playerOne}'s - ${this.playerNames['X']} - ${this.winningHistory['X']} wins`;
    playerTwo.innerHTML = `${this.playerTwo}'s - ${this.playerNames['O']} - ${this.winningHistory['O']} wins`;
    playerNamesContainer.append(playerOne);
    playerNamesContainer.append(playerTwo);
    //Append Current player's Turn
    var currentPlayerDiv = document.createElement('div');
    currentPlayerDiv.id = 'current-player';
    currentPlayerDiv.innerHTML = `${this.playerNames[this.currentPlayer]}'s turn - ${this.currentPlayer}'s`;
    gameContainer.append(currentPlayerDiv);
    //append Board
    gameContainer.append(boardElement)
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
      this.AvailableSpaces--;
      if (!this.gameOverCheck()) {
        this.toggleCurrentPlayer();
        this.renderBoard();
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
    for (var row of this.board) {
      var mark = row[0];
      var count = 0;
      for(var col of row) {
        if(col === mark && mark !== undefined) {
          count++;
        }
      }
      if(count === 3) {
        this.gameOver = true;
      }
    }
    return this.gameOver;
  }
  //winCheck on columns
  winCheckCol(){
    for (var i = 0; i < this.rowOne.length; i++) {
      if(this.rowOne[i] !== undefined && this.rowOne[i] === this.rowTwo[i] && this.rowOne[i] === this.rowThree[i]) {
        return this.gameOver = true;
      }
    }
    return this.gameOver;
  }

  winCheckDiagonal() {
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
  }
  //game reset
  gameOverCheck(){
    var rowGameOver = this.winCheckRow();
    var colGameOver = this.winCheckCol();
    var diagGameOver = this.winCheckDiagonal();
    var tie = this.allSpacesAreTaken();
    if (tie) {
      this.gameOver = true;
      this.renderBoard();
      window.alert('All Spaces Are Taken. The Game Ends in a Tie. Start a New Game')
    } else if (rowGameOver || colGameOver || diagGameOver) {

      window.alert(`${this.currentPlayer} wins!!! Start a New Game`);
      this.winningHistory[this.currentPlayer]++;
      this.lastWinner = this.currentPlayer;
      this.gameOver = true;
      this.renderBoard();
    }
    return this.gameOver;
  }
  newGame() {
    console.log('Setting up new Game')
    this.gameOver = false;
    this.rowOne = [ , , ,];
    this.rowTwo = [ , , ,];
    this.rowThree = [ , , ,];
    this.board = [this.rowOne, this.rowTwo, this.rowThree]
    this.AvailableSpaces = 9;
    this.renderBoard();
  }
}

// //RENDER GAMEBOARD TO SCREEN

var ticTacToe = new GameBoard();

var newGameButton = document.createElement('button')
newGameButton.className = 'new-game'
newGameButton.innerHTML = 'New Game';
newGameButton.addEventListener('click', () => {
  ticTacToe.newGame();
})
document.body.appendChild(newGameButton)
document.getElementById('heading').innerHTML = 'Tic Tac Toe';


class GameBoard {
  constructor(){
    this.rowOne = [, , ]
    this.rowTwo = [, , ]
    this.rowThree = [, , ]
    this.board = [this.rowOne, this.rowTwo, this.rowThree]
  }


  //placement
  placeXorO(XorO, row, index){
    this.board[row][index] = XorO
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

  //game reset
}
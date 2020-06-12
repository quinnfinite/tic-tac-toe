document.getElementById('heading').innerHTML = 'Tic Tac Toe';


class GameBoard {
  constructor(){
    this.rowOne = [null, null, null]
    this.rowTwo = [null, null, null]
    this.rowThree = [null, null, null]
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

  //game reset
}
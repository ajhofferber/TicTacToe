//Thoughts for JavaScript



//do i store squares data as an array or assign them all separated variables or 9 separate arrays the values are pushed into?!

var board = [ ] //attribute of the game object.  at begining of game, will be empty/null


// Have the game be able to identify what a "win" is

// assign X or O to the player 1 or player 2/computer

// have the computer know the different between player 2 option or computer player option

// have the computer be able to automatically alternate between whos turn it is
    //game object, property of 'turn number' begins at 0, as a player makes a move, counter increases
    //if turn counter is even, p2 if odd p1

// have the computer recognize when the board is full and no one has won and call it a tie

// set up a 'play' button that they can push to initialize everything, like render the grid and allow them to select 'X' or 'O'




//functions

//constructor function that runs the game

function TicTacToeGameBoard(){
  this.turnCounter = 0;
}

//something that will have an event listener for the click, will assign value into square
TicTacToeGameBoard.prototype.makeMove =  function makeMove(turn, index){
    if (this.board[index] === undefined){
        if (turn%2 === 0){
            this.board[index] = 'O';
        }else {
            this.board[index] = 'X';
        }
        this.turnCounter++;
    } else {
        console.log('TRY AGAIN NO room here')
    }
};
//functions to check for each of the win states (column, row, diagonal)

TicTacToeGameBoard.prototype.checkWin = function checkWin(){
  if (this.board[0]==='X' && this.board[1]==='X' && this.board[2]==='X'){
    console.log('Player 1 wins!')
  } else if (this.board[0]==='O' && this.board[1]==='O' && this.board[2]==='O'){
    console.log('Player 2 wins!')
  } else if (this.board[3]==='X' && this.board[4]==='X' && this.board[5]==='X'){
    console.log('Player 1 wins!')
  } else if (this.board[3]==='O' && this.board[4]==='O' && this.board[5]==='O'){
    console.log('Player 2 wins!')
  } else if (this.board[6]==='X' && this.board[7]==='X' && this.board[8]==='X'){
    console.log('Player 1 wins!')
  } else if (this.board[6]==='O' && this.board[7]==='O' && this.board[8]==='O'){
    console.log('Player 2 wins!')
  } else if (this.board[0]==='X' && this.board[3]==='X' && this.board[6]==='X'){
    console.log('Player 1 wins!')
  } else if (this.board[0]==='O' && this.board[3]==='O' && this.board[6]==='O'){
    console.log('Player 2 wins!')
  } else if (this.board[1]==='X' && this.board[4]==='X' && this.board[7]==='X'){
    console.log('Player 1 wins!')
  } else if (this.board[1]==='O' && this.board[4]==='O' && this.board[7]==='O'){
      console.log('Player 2 wins!')
  } else if (this.board[2]==='X' && this.board[5]==='X' && this.board[8]==='X'){
      console.log('Player 1 wins!')
  } else if (this.board[2]==='O' && this.board[5]==='O' && this.board[8]==='O'){
      console.log('Player 2 wins!')
  } else if (this.board[0]==='X' && this.board[4]==='X' && this.board[8]==='X'){
      console.log('Player 1 wins!')
  } else if (this.board[0]==='O' && this.board[4]==='O' && this.board[8]==='O'){
      console.log('Player 2 wins!')
  } else if (this.board[2]==='X' && this.board[4]==='X' && this.board[6]==='X'){
      console.log('Player 1 wins!')
  } else if (this.board[2]==='O' && this.board[4]==='0' && this.board[6]==='0'){
      console.log('Player 2 wins!')
}




//probably will need a constructor function that sets up a new game each time.

function Game(){
  //can start
  //can play
  //make function calls off of the game board.
  ash.turnCounter
}
var game = new Gameboard

//will need to be able to give the option to start a new game when one finishes

//ability to submit input of the player 1/player 2 names

//functions to check for each of the win states (column, row, diagonal)

//function to render board, based on how many columns or rows you want

//assign distinct values to each of the players so that the computer can recognize



var first = $('#first-player');
var second = $('#second-player');

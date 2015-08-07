//Thoughts for JavaScript


// have the computer know the different between player 2 option or computer player option

// have the computer be able to automatically alternate between whos turn it is
    //game object, property of 'turn number' begins at 0, as a player makes a move, counter increases
    //if turn counter is even, p2 if odd p1

// have the computer recognize when the board is full and no one has won and call it a tie



//functions

//constructor function that holds the game's abilities
function TicTacToeGameBoard(){
  this.turnCounter = 1;
  this.board = new Array(9);

}

// when i click on a square, an X appears
TicTacToeGameBoard.prototype.playerInfo = function playerInfo(){
  var whosFirst = prompt('Hi player 1, what is your name?')
  var whosSecond = prompt('Hi player 2, what is your name?')

  var first = $('#first-player').text(whosFirst);
  var second = $('#second-player').text(whosSecond);
}




//function to check for each of the win states (column, row, diagonal)

TicTacToeGameBoard.prototype.checkWin = function checkWin(makeMove){
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
};



// like cat example, will first create boxes, then will use box to make rows/comlumns
TicTacToeGameBoard.prototype.makeCell = function makeCell(cellIndex){
  var gameCell = $('<div>').addClass('box');
      gameCell.attr('id', cellIndex);
  //var index = gameCell.attr('id');
    return gameCell;
    //console.log(index)
}

// render a new board (function that will pass num row and num column)
TicTacToeGameBoard.prototype.makeBoard = function makeBoard(row, col){
  var gameBoard = $('<div>').addClass('game-board');
  var boardRow;
  var newBox;
    var cellIndex = 0;
  for (var i = 0; i < row; i++){
    boardRow = $('<div>').addClass('board-row');
    for (var j = 0; j < col; j++) {
      newBox = this.makeCell(cellIndex);
      cellIndex++;
      boardRow.append(newBox);
    }
    gameBoard.append(boardRow);
  }
  $('#center-section').append(gameBoard);

  var scope = this;
    $('.box').on('click', function(e){
        var cell = $(e.target);
          scope.makeMove(  cell,  cell.attr('id')   )
        });
  };
//something that will have an event listener for the click, will assign value into square

TicTacToeGameBoard.prototype.makeMove =  function makeMove(cell, index){
//index = this.cell.attr('id')

  if (this.board[index] === undefined){
    if (this.turnCounter%2 === 0){
      this.board[index] = 'O';
      cell.text('O');
    } else {
      this.board[index] = 'X';
      cell.text('X');
    }
        this.turnCounter++;
        console.log(this.turnCounter)
    };
    if(this.board[index] !== undefined){
      console.log('NOT HERE');
    }
    return this.board;

};
console.log(this.board);



      //  var index =  cell.attr('id');
  /*      $(".box").click(function(e){
          var cell = $(e.target);
          cell.text.toggle("slow");
        })
      };*/
//};

//this.cell

$(".box").click(function(){
       $(".box").text.toggle(1000, function(){
           alert("The toggle() method is finished!");
       });
   });

TicTacToeGameBoard.prototype.init = function init(domNode){
  this.gameBoard = this.makeBoard(this.width, this.height);
  domNode.append(this.gameBoard);
};







  //can start
  //can play
  //make function calls off of the game board.
//  ash.turnCounter
//}
//var game = new TicTacToeGameBoard;
/*
game.makeMove()
game.checkWin()
game.bindX()
game.makeBoard( 3, 3)
var game;
*/


$(document).ready(function(){
  var game = new TicTacToeGameBoard();
  game.makeBoard(3, 3);
  game.playerInfo();


  game.init( $('#center-section') );
});





//will need to be able to give the option to start a new game when one finishes

//ability to submit input of the player 1/player 2 names

//functions to check for each of the win states (column, row, diagonal)

//function to render board, based on how many columns or rows you want

//assign distinct values to each of the players so that the computer can recognize

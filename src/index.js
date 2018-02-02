var prompt = require('prompt');
// Gameplay
// 1. Print board to screen and prompt for user input

// 0 | 1 | 2
// 3 | 4 | 5
// 6 | 7 | 8

var board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var turn_number = 0;

function displayBoard() {
  var grid = '';
  for (var i=0; i<board.length; i+=3) {
    grid += board[i] + '|' + board[i+1] + '|' + board[i+2] + '\n'
  }
  return grid;
}

function turn(turn_number) {
  return turn_number % 2 == 0 ? 'X' : 'O';
}

var winningCombo = [
                    [0, 1, 2], [3, 4, 5], [6, 7, 8],
                    [0, 3, 6], [1, 4, 7], [2, 5, 8],
                    [0, 4, 8], [2, 4, 6]
                   ];

function checkWins() {
  for (var i = 0; i < winningCombo.length; i++){
      if(board[winningCombo[i][0]] === board[winningCombo[i][1]] && board[winningCombo[i][0]] === board[winningCombo[i][2]]){
        return board[winningCombo[i][0]] + ' WINS!!!!';
      }
  }
}

console.log(displayBoard());

prompt.start();
function play_turn() {
  prompt.get(['move'], function (err, result) {

    if (board[result.move] === 'X' || board[result.move] === 'O') {
      console.log('NAUGHTY!!!');
      console.log(displayBoard());
      play_turn()
    }

    board[result.move] = turn(turn_number);
    turn_number += 1;

    console.log(displayBoard());
    if (checkWins()) {
      console.log(checkWins());
      turn_number = 0;
      board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    }

    if (turn_number < 9) {
      play_turn();
    } else {
      turn_number = 0;
      console.log('DRAW!!!');
    }

  });
}
play_turn();

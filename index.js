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

console.log(displayBoard());

prompt.start();
function play_turn() {
  prompt.get(['move'], function (err, result) {

    board[result.move] = turn(turn_number);
    turn_number += 1;

    console.log(displayBoard());

    if (turn_number < 9) {
      play_turn();
    }

  });
}
play_turn();

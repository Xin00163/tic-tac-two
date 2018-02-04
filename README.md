# Tic-Tac-Toe

The aim of this tech test is to build the business logic for a game of tic tac toe. It should be easy to implement a working game of tic tac toe by combining the code with any user interface, whether web or command line.

## Game Rules

The rules of tic-tac-toe are as follows:

- There are two players in the game (X and O)
- Players take turns until the game is over
- A player can claim a field if it is not already taken
- A turn ends when a player claims a field
- A player wins if they claim all the fields in a row, column or diagonal
- A game is over if a player wins
- A game is over when all fields are taken

## My approach
1. Print board to screen and prompt for user input
2. X and O take turns to play
3. List all the winning combinations
[0, 1, 2], [3, 4, 5], [6, 7, 8],
[0, 3, 6], [1, 4, 7], [2, 5, 8],
[0, 4, 8], [2, 4, 6]
4. Add game logic
board[winningCombo[i][0]] === board[winningCombo[i][1]] && board[winningCombo[i][0]] === board[winningCombo[i][2]]
5. Add DRAW
6. Edge case: user enter a number twice

## Dependencies
I used command line prompt for node.js. https://github.com/flatiron/prompt

## Blockers/Next step
Test user input.

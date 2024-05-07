// https://www.codewars.com/kata/5296bc77afba8baa690002d7/train/javascript

function sudoku(puzzle) {
  const SIZE = 9;
  const EMPTY = 0;

  // Check if the number can be placed in the given row and column
  function isValid(num, row, col) {
    for (let i = 0; i < SIZE; i++) {
      if (puzzle[row][i] === num || puzzle[i][col] === num) {
        return false;
      }
    }

    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;

    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (puzzle[i][j] === num) {
          return false;
        }
      }
    }

    return true;
  }

  // Recursive function to solve the Sudoku puzzle
  function solve() {
    for (let row = 0; row < SIZE; row++) {
      for (let col = 0; col < SIZE; col++) {
        if (puzzle[row][col] === EMPTY) {
          for (let num = 1; num <= SIZE; num++) {
            if (isValid(num, row, col)) {
              puzzle[row][col] = num;

              if (solve()) {
                return true;
              }

              puzzle[row][col] = EMPTY;
            }
          }

          return false;
        }
      }
    }

    return true; // Puzzle solved
  }

  if (solve()) {
    return puzzle;
  } else {
    return "No solution exists for the given Sudoku puzzle.";
  }
}

var puzzle = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

console.log(sudoku(puzzle));

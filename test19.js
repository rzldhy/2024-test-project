// https://www.codewars.com/kata/540afbe2dc9f615d5e000425/train/javascript

var Sudoku = function (data) {
  // Private methods
  function isValidRow(row) {
    let seen = new Set();
    for (let num of row) {
      if (seen.has(num)) {
        return false;
      }
      seen.add(num);
    }
    return true;
  }

  function isValidCol(colIdx) {
    let seen = new Set();
    for (let row of data) {
      let num = row[colIdx];
      if (seen.has(num)) {
        return false;
      }
      seen.add(num);
    }
    return true;
  }

  function isValidSquare(startRow, startCol) {
    let seen = new Set();
    const sqrtN = Math.sqrt(data.length);
    for (let i = startRow; i < startRow + sqrtN; i++) {
      for (let j = startCol; j < startCol + sqrtN; j++) {
        let num = data[i][j];
        if (seen.has(num)) {
          return false;
        }
        seen.add(num);
      }
    }
    return true;
  }

  // Public methods
  return {
    isValid: function () {
      if (data.length === 1 && data[0].length === 1) {
        // Handle 1x1 Sudoku grid
        return data[0][0] === 1;
      }

      for (let i = 0; i < data.length; i++) {
        if (!isValidRow(data[i]) || !isValidCol(i)) {
          return false;
        }
      }
      const sqrtN = Math.sqrt(data.length);
      for (let i = 0; i < data.length; i += sqrtN) {
        for (let j = 0; j < data.length; j += sqrtN) {
          if (!isValidSquare(i, j)) {
            return false;
          }
        }
      }
      return true;
    },
  };
};

const goodSudoku1 = new Sudoku([
  [7, 8, 4, 1, 5, 9, 3, 2, 6],
  [5, 3, 9, 6, 7, 2, 8, 4, 1],
  [6, 1, 2, 4, 3, 8, 7, 5, 9],
  [9, 2, 8, 7, 1, 5, 4, 6, 3],
  [3, 5, 7, 8, 4, 6, 1, 9, 2],
  [4, 6, 1, 9, 2, 3, 5, 8, 7],
  [8, 7, 6, 3, 9, 4, 2, 1, 5],
  [2, 4, 3, 5, 6, 1, 9, 7, 8],
  [1, 9, 5, 2, 8, 7, 6, 3, 4],
]);

console.log(goodSudoku1.isValid()); // Output: true

const invalidSudoku = new Sudoku([
  [1, 2],
  [2, 1],
]);

console.log(invalidSudoku.isValid()); // Output: false

const oneByOneInvalid = new Sudoku([[2]]);

console.log(oneByOneInvalid.isValid()); // Output: false

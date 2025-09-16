//www.codewars.com/kata/52bb6539a4cf1b12d90005b7/train/javascript

https: function validateBattlefield(field) {
  const N = 10;

  // Should sum to 20 ones (4 + 2×3 + 3×2 + 4×1 = 20)
  const total = field.reduce((s, row) => s + row.reduce((a, b) => a + b, 0), 0);
  if (total !== 20) return false;

  // Keep track of visited coords so we don't double-count ships
  const visited = Array.from({ length: N }, () => Array(N).fill(false));

  const shipCounts = { 1: 0, 2: 0, 3: 0, 4: 0 };

  function inBounds(i, j) {
    return i >= 0 && i < N && j >= 0 && j < N;
  }

  function markDiagonalNeighbours(i, j) {
    // if there's a diagonal neighbour with 1, that's invalid
    const dirs = [
      [-1, -1],
      [-1, +1],
      [+1, -1],
      [+1, +1],
    ];
    for (const [di, dj] of dirs) {
      const ni = i + di,
        nj = j + dj;
      if (inBounds(ni, nj) && field[ni][nj] === 1) return false;
    }
    return true;
  }

  function exploreShip(i, j) {
    // Explore continuous ship either horizontally or vertically
    // Returns size, and marks visited

    // First determine direction:
    // Check right neighbour
    let length = 1;
    visited[i][j] = true;

    // try horizontal
    if (inBounds(i, j + 1) && field[i][j + 1] === 1) {
      let jj = j + 1;
      while (inBounds(i, jj) && field[i][jj] === 1) {
        visited[i][jj] = true;
        length++;
        // ensure no vertical branching
        if (
          (inBounds(i + 1, jj) && field[i + 1][jj] === 1) ||
          (inBounds(i - 1, jj) && field[i - 1][jj] === 1)
        ) {
          return -1; // invalid shape
        }
        jj++;
      }
    }
    // else try vertical
    else if (inBounds(i + 1, j) && field[i + 1][j] === 1) {
      let ii = i + 1;
      while (inBounds(ii, j) && field[ii][j] === 1) {
        visited[ii][j] = true;
        length++;
        // ensure no horizontal branching
        if (
          (inBounds(ii, j + 1) && field[ii][j + 1] === 1) ||
          (inBounds(ii, j - 1) && field[ii][j - 1] === 1)
        ) {
          return -1; // invalid shape
        }
        ii++;
      }
    }

    return length;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (field[i][j] === 1) {
        // check diagonals
        if (!markDiagonalNeighbours(i, j)) return false;
        if (!visited[i][j]) {
          const size = exploreShip(i, j);
          if (size <= 0 || size > 4) return false;
          shipCounts[size] = shipCounts[size] + 1;
        }
      }
    }
  }

  // Expected ships: one battleship (4), two cruisers (3), three destroyers (2), four submarines (1)
  return (
    shipCounts[4] === 1 &&
    shipCounts[3] === 2 &&
    shipCounts[2] === 3 &&
    shipCounts[1] === 4
  );
}

//www.codewars.com/kata/5870fa11aa0428da750000da/train/javascript

https: function execute(code) {
  // --- Parse instructions with repeat counts ---
  const regex = /([FLR])(\d*)/g;
  const instr = [];
  let match;
  while ((match = regex.exec(code))) {
    const cmd = match[1];
    const count = match[2] ? parseInt(match[2], 10) : 1;
    instr.push([cmd, count]);
  }

  // --- Direction vectors: Right, Down, Left, Up ---
  const dirs = [
    [1, 0], // Right
    [0, 1], // Down
    [-1, 0], // Left
    [0, -1], // Up
  ];

  // --- Robot state ---
  let x = 0,
    y = 0,
    dir = 0;
  const visited = new Set();
  visited.add(`${x},${y}`);

  let minX = 0,
    maxX = 0,
    minY = 0,
    maxY = 0;

  // --- Execute instructions ---
  for (const [cmd, count] of instr) {
    if (cmd === "F") {
      for (let i = 0; i < count; i++) {
        x += dirs[dir][0];
        y += dirs[dir][1];
        visited.add(`${x},${y}`);
        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
        minY = Math.min(minY, y);
        maxY = Math.max(maxY, y);
      }
    } else if (cmd === "L") {
      dir = (dir + 3 * count) % 4; // turn left
    } else if (cmd === "R") {
      dir = (dir + count) % 4; // turn right
    }
  }

  // --- Build grid ---
  const rows = maxY - minY + 1;
  const cols = maxX - minX + 1;
  const grid = Array.from({ length: rows }, () => Array(cols).fill(" "));

  for (const pos of visited) {
    const [vx, vy] = pos.split(",").map(Number);
    grid[vy - minY][vx - minX] = "*";
  }

  return grid.map((row) => row.join("")).join("\r\n");
}

// ✅ Tests from description
console.log(execute(""));
// "*"

console.log(execute("FFFFF"));
// "******"

console.log(execute("FFFFFLFFFFFLFFFFFLFFFFFL"));
// "******\r\n*    *\r\n*    *\r\n*    *\r\n*    *\r\n******"

console.log(execute("LFFFFFRFFFRFFFRFFFFFFF"));
// "    ****\r\n    *  *\r\n    *  *\r\n********\r\n    *   \r\n    *   "

console.log(execute("LF5RF3RF3RF7"));
// Same as above

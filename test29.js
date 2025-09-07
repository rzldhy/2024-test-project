//www.codewars.com/kata/58678d29dbca9a68d80000d7/train/javascript

https: function interpreter(code, tape) {
  // Filter out invalid chars
  code = code.replace(/[^><*\[\]]/g, "");
  const progLen = code.length;

  // Precompute loop jump table
  const loopMap = {};
  const stack = [];
  for (let i = 0; i < progLen; i++) {
    if (code[i] === "[") {
      stack.push(i);
    } else if (code[i] === "]") {
      const start = stack.pop();
      loopMap[start] = i;
      loopMap[i] = start;
    }
  }

  // Tape as array
  let tapeArr = tape.split("").map(Number);
  let ptr = 0; // pointer
  let ip = 0; // instruction pointer

  while (ip < progLen && ptr >= 0 && ptr < tapeArr.length) {
    const cmd = code[ip];

    switch (cmd) {
      case ">":
        ptr++;
        break;
      case "<":
        ptr--;
        break;
      case "*":
        tapeArr[ptr] ^= 1;
        break; // flip bit
      case "[":
        if (tapeArr[ptr] === 0) ip = loopMap[ip];
        break;
      case "]":
        if (tapeArr[ptr] !== 0) ip = loopMap[ip];
        break;
    }

    ip++;
  }

  return tapeArr.join("");
}

// ✅ Example tests
console.log(interpreter("*", "00101100")); // "10101100"  (flips first bit)
console.log(interpreter(">*>*", "00101100")); // "01001100"  (move, flip, move, flip)
console.log(interpreter("[*]", "1")); // "0"         (flip until becomes 0)
console.log(interpreter("[*]", "0")); // "0"         (skip loop immediately)

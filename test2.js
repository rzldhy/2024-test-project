function diamond(n) {
  if (n < 1 || n % 2 === 0) return null;

  const mid = Math.floor(n / 2) + 1;
  let str = "";

  // Generate top half of diamond
  for (let i = 1; i <= mid; i++) {
    let padding = " ".repeat(mid - i);
    str += padding + "*".repeat(2 * i - 1) + "\n";
  }

  // Generate bottom half of diamond
  for (let i = mid - 1; i >= 1; i--) {
    let padding = " ".repeat(mid - i);
    str += padding + "*".repeat(2 * i - 1) + "\n";
  }

  return str;
}

console.log(diamond(1));

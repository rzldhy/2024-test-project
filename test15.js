// https://www.codewars.com/kata/526d84b98f428f14a60008da/train/javascript

function hamming(n) {
  if (n <= 0) return null;

  let hamNums = [1]; // Initialize with the first Hamming number
  let i2 = 0,
    i3 = 0,
    i5 = 0; // Pointers for multiples of 2, 3, and 5

  while (hamNums.length < n) {
    let nextHam = Math.min(hamNums[i2] * 2, hamNums[i3] * 3, hamNums[i5] * 5);
    if (nextHam === hamNums[i2] * 2) i2++;
    if (nextHam === hamNums[i3] * 3) i3++;
    if (nextHam === hamNums[i5] * 5) i5++;
    hamNums.push(nextHam);
  }

  return hamNums[hamNums.length - 1];
}

// Example usage:
console.log(hamming(1)); // Output: 1
console.log(hamming(2)); // Output: 2
console.log(hamming(3)); // Output: 3
console.log(hamming(4)); // Output: 4
console.log(hamming(5)); // Output: 5

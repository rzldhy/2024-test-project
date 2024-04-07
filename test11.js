// https://www.codewars.com/kata/52f787eb172a8b4ae1000a34/train/javascript

function zeros(n) {
  let countZeros = 0;

  // Count the number of times n is divisible by 5
  for (let i = 5; n / i >= 1; i *= 5) {
    countZeros += Math.floor(n / i);
  }

  return countZeros;
}

// Examples
console.log(zeros(6)); // Output: 1
console.log(zeros(12)); // Output: 2

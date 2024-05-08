// https://www.codewars.com/kata/541af676b589989aed0009e7/train/javascript

function countChange(amount, coins) {
  // Create an array to store the number of ways to make change for each amount from 0 to amount
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1; // There's one way to make change for 0

  // Iterate through each coin denomination
  for (const coin of coins) {
    // Update dp array starting from the current coin denomination
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin]; // Accumulate ways based on previously computed ways
    }
  }

  return dp[amount]; // Return the number of ways to make change for the target amount
}

// Examples
console.log(countChange(4, [1, 2])); // Output: 3
console.log(countChange(10, [5, 2, 3])); // Output: 4
console.log(countChange(11, [5, 7])); // Output: 0

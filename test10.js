// https://www.codewars.com/kata/529adbf7533b761c560004e5/javascript

function fibonacci(n) {
  const cache = {}; // Private cache object for memoization

  function fibMemoized(num) {
    if (num < 2) return num;
    if (cache[num]) return cache[num]; // Return cached value if present

    // Calculate Fibonacci number and store it in cache
    cache[num] = fibMemoized(num - 1) + fibMemoized(num - 2);
    return cache[num];
  }

  return fibMemoized(n);
}

// Example usage:
console.log(fibonacci(50)); // Example usage with n = 50

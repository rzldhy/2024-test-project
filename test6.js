function sumPairs(ints, s) {
  const seenNumbers = new Set();

  for (let i = 0; i < ints.length; i++) {
    const complement = s - ints[i];

    if (seenNumbers.has(complement)) {
      return [complement, ints[i]];
    }

    seenNumbers.add(ints[i]);
  }

  return undefined;
}

// Example usage:
console.log(sumPairs([11, 3, 7, 5], 10)); // Output: [3, 7]
console.log(sumPairs([4, 3, 2, 3, 4], 6)); // Output: [4, 2]
console.log(sumPairs([0, 0, -2, 3], 2)); // Output: undefined
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)); // Output: [3, 7]
console.log(sumPairs([1, 4, 8, 7, 3, 15], 8)); // Output: [1, 7]

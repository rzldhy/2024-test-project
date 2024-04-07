// https://www.codewars.com/kata/5254ca2719453dcc0b00027d/train/javascript

function permutations(string) {
  const result = new Set();

  // Helper function to generate permutations recursively
  function generatePermutations(current, remaining) {
    if (remaining.length === 0) {
      result.add(current);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      generatePermutations(
        current + remaining[i],
        remaining.slice(0, i) + remaining.slice(i + 1)
      );
    }
  }

  generatePermutations("", string);
  return [...result];
}

// Examples
console.log(permutations("a")); // Output: ['a']
console.log(permutations("ab")); // Output: ['ab', 'ba']
console.log(permutations("abc")); // Output: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
console.log(permutations("aabb")); // Output: ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

https: function duplicateCount(input) {
  if (!input) return 0;

  const charMap = new Map();
  let count = 0;

  for (const char of input) {
    const lowerCaseChar = char.toLowerCase();
    if (charMap.has(lowerCaseChar)) {
      charMap.set(lowerCaseChar, charMap.get(lowerCaseChar) + 1);
    } else {
      charMap.set(lowerCaseChar, 1);
    }
  }

  for (const [key, value] of charMap.entries()) {
    if (value > 1) count++;
  }

  return count;
}

console.log(duplicateCount(""));

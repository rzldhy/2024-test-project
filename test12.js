function isMerge(s, part1, part2) {
  if (s === "") {
    // If s is empty, both part1 and part2 should also be empty
    return part1 === "" && part2 === "";
  }

  if (part1[0] === s[0] && isMerge(s.slice(1), part1.slice(1), part2)) {
    // If the first character of part1 matches the first character of s, recurse without that character
    return true;
  }

  if (part2[0] === s[0] && isMerge(s.slice(1), part1, part2.slice(1))) {
    // If the first character of part2 matches the first character of s, recurse without that character
    return true;
  }

  return false; // If neither condition is met, s cannot be formed from part1 and part2
}

// Example usage:
console.log(isMerge("codewars", "cdw", "oears")); // Output: true
console.log(isMerge("codewars", "cde", "owars")); // Output: false

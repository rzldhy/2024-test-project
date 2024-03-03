function perimeter(n) {
  if (n === 0) {
    return 4;
  }

  let a = 1;
  let b = 1;
  let sum = 2; // Initialize with 2 to account for the initial square

  for (let i = 2; i <= n; i++) {
    const temp = b;
    b = b + a;
    a = temp;
    sum += b; // Add each side length to the sum
  }

  return 4 * sum;
}

console.log(perimeter(7)); // Output should be 216

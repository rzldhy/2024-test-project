//www.codewars.com/kata/559a28007caad2ac4e000083

https: function perimeter(n) {
  if (n === 1) {
    return 0;
  }

  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }

  return 4 * (a + b);
}

console.log(perimeter(5));

// https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript

function add(a, b) {
  let result = "";
  let carry = 0;

  // Make sure both strings have the same length by padding with zeros
  const maxLength = Math.max(a.length, b.length);
  a = a.padStart(maxLength, "0");
  b = b.padStart(maxLength, "0");

  for (let i = maxLength - 1; i >= 0; i--) {
    const sum = parseInt(a[i]) + parseInt(b[i]) + carry;
    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);
  }

  // If there's a carry after all digits are processed, prepend it to the result
  if (carry > 0) {
    result = carry + result;
  }

  return result;
}

console.log(add("123", "321")); // "444"
console.log(add("11", "99")); // "110"
console.log(add("1", "1")); // "2"

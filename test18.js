// https://www.codewars.com/kata/51b66044bce5799a7f000003/train/javascript

class RomanNumerals {
  static toRoman(num) {
    const romanSymbols = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    let result = "";
    for (let symbol in romanSymbols) {
      while (num >= romanSymbols[symbol]) {
        result += symbol;
        num -= romanSymbols[symbol];
      }
    }
    return result;
  }

  static fromRoman(str) {
    const romanSymbols = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    let result = 0;
    for (let i = 0; i < str.length; i++) {
      const currentSymbolValue = romanSymbols[str[i]];
      const nextSymbolValue = romanSymbols[str[i + 1]];
      if (nextSymbolValue > currentSymbolValue) {
        result += nextSymbolValue - currentSymbolValue;
        i++;
      } else {
        result += currentSymbolValue;
      }
    }
    return result;
  }
}

console.log(RomanNumerals.toRoman(2000)); // Output: "MM"
console.log(RomanNumerals.toRoman(1666)); // Output: "MDCLXVI"
console.log(RomanNumerals.toRoman(86)); // Output: "LXXXVI"
console.log(RomanNumerals.toRoman(1)); // Output: "I"

console.log(RomanNumerals.fromRoman("MM")); // Output: 2000
console.log(RomanNumerals.fromRoman("MDCLXVI")); // Output: 1666
console.log(RomanNumerals.fromRoman("LXXXVI")); // Output: 86
console.log(RomanNumerals.fromRoman("I")); // Output: 1

// https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/javascript

function parse(input) {
  const output = [];
  let value = 0;

  for (let i = 0; i < input.length; i++) {
    const command = input[i];

    switch (command) {
      case "i":
        value++;
        break;
      case "d":
        value--;
        break;
      case "s":
        value *= value;
        break;
      case "o":
        output.push(value);
        break;
      default:
        // Ignore invalid characters
        break;
    }
  }

  return output;
}

console.log(parse("iiisdoso")); // [ 8, 64 ]

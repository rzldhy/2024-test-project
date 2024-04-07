// https://www.codewars.com/kata/58e24788e24ddee28e000053/train/javascript

function simple_assembler(program) {
  const registers = {};
  let i = 0;

  const getValue = (arg) => {
    return isNaN(arg) ? registers[arg] : parseInt(arg);
  };

  while (i < program.length) {
    const [instruction, arg1, arg2] = program[i].split(" ");

    switch (instruction) {
      case "mov":
        registers[arg1] = getValue(arg2);
        break;
      case "inc":
        registers[arg1]++;
        break;
      case "dec":
        registers[arg1]--;
        break;
      case "jnz":
        if (getValue(arg1) !== 0) {
          i += getValue(arg2) - 1;
        }
        break;
    }

    i++;
  }

  return registers;
}

// Example usage:
const program = ["mov a 5", "inc a", "dec a", "dec a", "jnz a -1", "inc a"];

console.log(simple_assembler(program)); // Output: { a: 1 }

// https://www.codewars.com/kata/52a78825cdfc2cfc87000005/train/javascript

const calc = function (expression) {
  // Tokenizer: converts the input string into a list of tokens
  const tokenize = (str) => {
    const tokens = [];
    const numPattern = /\d+(\.\d+)?/g;
    let index = 0;
    while (index < str.length) {
      const char = str[index];
      if (/\s/.test(char)) {
        // Skip whitespace
        index++;
      } else if (char.match(numPattern)) {
        // Match number
        const match = str.slice(index).match(numPattern)[0];
        tokens.push({ type: "NUMBER", value: parseFloat(match) });
        index += match.length;
      } else if ("+-*/()".includes(char)) {
        // Match operators and parentheses
        tokens.push({ type: "OPERATOR", value: char });
        index++;
      } else {
        throw new Error("Invalid character: " + char);
      }
    }
    return tokens;
  };

  // Parser: converts the list of tokens into an abstract syntax tree (AST)
  const parse = (tokens) => {
    let index = 0;

    const parsePrimary = () => {
      let token = tokens[index++];
      if (token.type === "NUMBER") {
        return token.value;
      } else if (token.value === "(") {
        let expr = parseExpression();
        if (tokens[index].value !== ")") {
          throw new Error("Expected closing parenthesis");
        }
        index++;
        return expr;
      } else if (token.value === "-") {
        return -parsePrimary();
      }
      throw new Error("Unexpected token: " + token.value);
    };

    const parseTerm = () => {
      let left = parsePrimary();
      while (
        index < tokens.length &&
        (tokens[index].value === "*" || tokens[index].value === "/")
      ) {
        let op = tokens[index++].value;
        let right = parsePrimary();
        if (op === "*") {
          left *= right;
        } else if (op === "/") {
          left /= right;
        }
      }
      return left;
    };

    const parseExpression = () => {
      let left = parseTerm();
      while (
        index < tokens.length &&
        (tokens[index].value === "+" || tokens[index].value === "-")
      ) {
        let op = tokens[index++].value;
        let right = parseTerm();
        if (op === "+") {
          left += right;
        } else if (op === "-") {
          left -= right;
        }
      }
      return left;
    };

    return parseExpression();
  };

  const tokens = tokenize(expression);
  return parse(tokens);
};

// Testing the function with the provided tests
describe("Tests", () => {
  it("test", () => {
    const tests = [
      ["1+1", 2],
      ["1 - 1", 0],
      ["1* 1", 1],
      ["1 /1", 1],
      ["-123", -123],
      ["123", 123],
      ["2 /2+3 * 4.75- -6", 21.25],
      ["12* 123", 1476],
      ["2 / (2 + 3) * 4.33 - -6", 7.732],
    ];

    for (const [input, expected] of tests) {
      assert.strictEqual(calc(input), expected);
    }
  });
});

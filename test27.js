//www.codewars.com/kata/513fa1d75e4297ba38000003/train/javascript

function flatten(...args) {
  const result = [];

  function helper(item) {
    if (Array.isArray(item)) {
      for (let el of item) {
        helper(el);
      }
    } else {
      result.push(item);
    }
  }

  for (let arg of args) {
    helper(arg);
  }

  return result;
}

// Examples
console.log(flatten(1, [2, 3], 4, 5, [6, [7]]));
// [1, 2, 3, 4, 5, 6, 7]

console.log(flatten("a", ["b", 2], 3, 666, [[4], ["c"]]));
// ['a', 'b', 2, 3, 666, 4, 'c']

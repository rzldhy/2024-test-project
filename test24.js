// https://www.codewars.com/kata/56a1c63f3bc6827e13000006/train/javascript

function smaller(arr) {
  // Fenwick Tree / Binary Indexed Tree class
  class FenwickTree {
    constructor(size) {
      this.size = size;
      this.tree = Array(size + 1).fill(0);
    }

    update(index, value) {
      while (index <= this.size) {
        this.tree[index] += value;
        index += index & -index;
      }
    }

    query(index) {
      let sum = 0;
      while (index > 0) {
        sum += this.tree[index];
        index -= index & -index;
      }
      return sum;
    }
  }

  const offset = 100000; // To handle negative numbers
  const maxNum = 200000; // Maximum possible number in arr after offset
  const result = [];
  const fenwickTree = new FenwickTree(maxNum);

  // Traverse the array from right to left
  for (let i = arr.length - 1; i >= 0; i--) {
    // Query the count of numbers smaller than arr[i]
    const count = fenwickTree.query(arr[i] + offset - 1);
    result.push(count);
    // Update the Fenwick Tree with the current number
    fenwickTree.update(arr[i] + offset, 1);
  }

  // Reverse the result array to match the order of the original array
  return result.reverse();
}

// Test cases
console.log(smaller([5, 4, 3, 2, 1])); // [4, 3, 2, 1, 0]
console.log(smaller([1, 2, 0])); // [1, 1, 0]

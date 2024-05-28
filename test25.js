// https://www.codewars.com/kata/583d6cf7c23341eee900025b/train/javascript

class SegmentTree {
  constructor(arr) {
    this.n = arr.length;
    this.tree = Array(2 * this.n).fill(0);
    this.build(arr);
  }

  build(arr) {
    for (let i = 0; i < this.n; i++) {
      this.tree[this.n + i] = arr[i];
    }
    for (let i = this.n - 1; i > 0; i--) {
      this.tree[i] = this.tree[i * 2] + this.tree[i * 2 + 1];
    }
  }

  update(index, value) {
    index += this.n;
    this.tree[index] = value;
    while (index > 1) {
      index = Math.floor(index / 2);
      this.tree[index] = this.tree[index * 2] + this.tree[index * 2 + 1];
    }
  }

  query(left, right) {
    left += this.n;
    right += this.n + 1;
    let sum = 0;
    while (left < right) {
      if (left % 2 === 1) {
        sum += this.tree[left];
        left++;
      }
      if (right % 2 === 1) {
        right--;
        sum += this.tree[right];
      }
      left = Math.floor(left / 2);
      right = Math.floor(right / 2);
    }
    return sum;
  }
}

function maxSum(arr, range) {
  const segmentTree = new SegmentTree(arr);
  let maxSumValue = -Infinity;

  for (const [start, end, num] of range) {
    segmentTree.update(start, num);
    const sum = segmentTree.query(start, end);
    if (sum > maxSumValue) {
      maxSumValue = sum;
    }
  }

  return maxSumValue;
}

// Test cases
console.log(
  maxSum(
    [1, -2, 3, 4, -5, -4, 3, 2, 1],
    [
      [1, 3, 5],
      [0, 4, 2],
      [6, 8, 1],
    ]
  )
); // 12
console.log(maxSum([1, -2, 3, 4, -5, -4, 3, 2, 1], [[1, 3, 10]])); // 17
console.log(
  maxSum(
    [1, -2, 3, 4, -5, -4, 3, 2, 1],
    [
      [1, 4, 6],
      [2, 5, 4],
    ]
  )
); // 8

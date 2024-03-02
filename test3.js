function findOutlier(arr) {
  let oddArr = [];
  let evenArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArr.push(arr[i]);
    } else {
      oddArr.push(arr[i]);
    }
  }

  if (oddArr.length > evenArr.length) {
    return evenArr[0];
  } else {
    return oddArr[0];
  }
}

console.log(findOutlier([0, 1, 2]));

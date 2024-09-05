// 29/366
// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

// function removeEveryOther(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i += 2) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }

// console.log(
//   // removeEveryOther(["Hello", "Goodbye", "Hello Again"])
//   removeEveryOther(["1, 2, 3, 4, 5, 6, 7, 8, 9, 10"])
// );

// function removeEveryOther(arr) {
//   return arr.filter((el, i) => i % 2 == 0);
// }
// console.log(
//   // removeEveryOther(["Hello", "Goodbye", "Hello Again"])
//   removeEveryOther(["1, 2, 3, 4, 5, 6, 7, 8, 9, 10"])
// );

// function removeEveryOther(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i += 2) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }

// console.log(
//   // removeEveryOther(["Hello", "Goodbye", "Hello Again"])
//   removeEveryOther(["1, 2, 3, 4, 5, 6, 7, 8, 9, 10"])
// );

const removeEveryOther = (arr) => arr.filter((el, i) => i % 2 == 0);
console.log(
  // removeEveryOther(["Hello", "Goodbye", "Hello Again"])
  removeEveryOther(["1, 2, 3, 4, 5, 6, 7, 8, 9, 10"])
);

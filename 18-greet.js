// 18/366
// https://www.codewars.com/kata/5772da22b89313a4d50012f7/train/javascript

// function greet (name, owner) {
//     if (name === owner) return 'Hello boss';
//     if (name !== owner) return 'Hello guest';
// }

// function greet (name, owner) {
//     if (name === owner) {
//         return 'Hello boss';
//     } else {
//       return 'Hello guest';
//     }
// }

// function greet (name, owner) {
//     return (name === owner) ? 'Hello boss' : 'Hello guest';
//         return 'Hello guest';  
// }

const greet = (name, owner) => (name === owner ? 'Hello boss' : 'Hello guest');


console.log(greet('Greg', 'Daniel'));
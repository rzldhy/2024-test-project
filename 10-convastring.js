// 10/366
// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/solutions/javascript

// def string_to_array(s): (python)
//     l = list(s.split())
//     if len(l) == 0:
//         l.append('')
//     return l

// def string_to_array(s): (python)
//     return list(s.split(' '))

// function stringToArray(string){

// 	    return string.split(' ')
// }

const stringToArray = (string) => string.split(' ');

console.log(stringToArray("Robin Singh"), ["Robin", "Singh"]);
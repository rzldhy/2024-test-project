10/366

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
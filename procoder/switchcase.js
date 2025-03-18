// const dayNumber = 6

// if (dayNumber === 0) {
//     console.log('It is Sunday')
// } else if (dayNumber === 1) {
//     console.log('It is Monday')
// }
// else if (dayNumber === 2) {
//     console.log('It is Tuesday')
// }
// else if (dayNumber === 3) {
//     console.log('It is wednesday')
// }
// else if (dayNumber === 4) {
//     console.log('It is Thrusday')
// }
// else if (dayNumber === 5) {
//     console.log('It is Friday')
// }
// else if (dayNumber === 6) {
//     console.log('It is Staturday')
// } else {
//     console.log('Enter Vaild Day Number')
// }

const dayNumber = 12

// switch (dayNumber) {
//     case 0:
//         console.log('It is Sunday')
//         break;
//     case 1:
//         console.log('It is Monday')
//         break;
//     case 2:
//         console.log('It is Tuesday')
//         break;
//     case 3:
//         console.log('It is wednesday')
//         break;
//     case 4:
//         console.log('It is Thursday')
//         break;
//     case 5:
//         console.log('It is Friday')
//         break;
//     case 6:
//         console.log('It is saturday')
//         break;
//     default:
//         console.log('please enter vaild date')

// }
// console.log('program end')

let studentName = 'Mohit';
let studentAge = 26;

// if (studentAge >= 0 && studentAge <= 5) {
//     console.log(`${studentName} is a baby child`);
// } else if (studentAge >= 6 && studentAge <= 18) {
//     console.log(`${studentName} is a School child`);
// } else if (studentAge >= 19) {
//     console.log(`${studentName} is an adult`);
//     if (studentAge <= 18) {
//         console.log('He is above 19');
//     } else {
//         console.log('He is 19');
//         if (userName.length > 2) {
//             console.log('user greater than 6')
//         }
//         else {
//             console.log('user less than 3')
//         }
//     }
// }

// switch (true) {
//     case (studentAge >= 0 && studentAge <= 5):
//         console.log(`${studentName} is a baby child`);
//         break
//     case (studentAge >= 6 && studentAge <= 18):
//         console.log(`${studentName} is a School child`);
//     case (studentAge >= 19): {
//         console.log(`${studentName} is an adult`);
//     }
//     default:
//         console.log('please enter vaild number')
// }

const grade = 'c'

switch (grade) {
    case 'a':
        console.log('your score is 95 to 80')
        break;
    case 'b':
        console.log('your score is 80 to 70');
        break;
    case 'c':
        console.log('your score is 60 to 50');
        break;
    case 'D':
        console.log('your score is 40 to 10');
    default:
        console.log('your score is 0')
};
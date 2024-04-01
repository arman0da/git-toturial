// for(let count = 0; count < 10; count++) {
//     console.log('count:', count);
// }
// for (let num = 0; num <= 30; num++) {
//   if (num % 2 == 0) {
//     console.log("is even:", num);
//   } else {
//     console.log("is odd:", num);
//   }
// }

// let input = 5;
// for(let count = 0; count <= input; count ++) {
//     if(input % count == 0) {
//         console.log(count);
//     }
// }

// let input = 496;
// let temp = 0;
// for(let count = 0; count < input; count++) {
//     if(input % count == 0) {
//         temp = temp + count;
//     }
// }

// if(temp == input) {
//     console.log('PerfectNumber', temp);
// }

let input = 2;
let temp = 0;
for(let count = 0; count <= input; count++) {
    if(input % count == 0) {
        temp++;
    }
}

if (temp == 2) {
    console.log('adade aval:', input);
}
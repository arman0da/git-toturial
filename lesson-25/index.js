let names = ["Arman", "Reza", "Mammad", "Reza", "Ali"];

console.log(names);
// names.splice(1, 2);
// names.splice(1, 1);
// names.splice(2, 2);
// names.splice(2, 0, 'King', 'X');
const middleOfArray = names.length / 2;
names.splice(middleOfArray, 0, "King", "X");
console.log(names);
// console.log(names.slice(1, 3));
// console.log(names.slice(-2));
// let numbers1 = [1, 2, 3, 4, 5];
// let numbers2 = [6, 7, 8, 9, 10];
// const newNumbers = numbers1.concat(numbers2);
// console.log(newNumbers);
// console.log(names.indexOf('Reza'));
// // console.log(names.indexOf('X', 1));
// console.log(names.lastIndexOf('Reza'));

console.log(names.slice(1, 5));
console.log(names.slice(-2));
let numbers1 = [1, 2, 3, 4, 5];
let numbers2 = [6, 7, 8, 9, 10];
let newNumbers = numbers1.concat(numbers2);
console.log(newNumbers);
console.log(names.indexOf('Arman'));
console.log(names.lastIndexOf('Reza'));

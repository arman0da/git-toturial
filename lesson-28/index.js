const skills = ["JavaScript", "Nodejs", 'js', "Expressjs", "MongoDB"];
const numbers = [2, 5, 8, 6, 4, 7, 10, 25, 98];
function mulTwo (item) {
    return item * 2;
}
// const newNumbers = numbers.map((item) => {
//     return item * 2
// });
const newNumbers = numbers.map((item) => item * 2);
// const newNumbers = numbers.map(mulTwo);

console.log(numbers);
console.log(newNumbers);

const newSkills = skills.map(item => item + '- js');
console.log(newSkills);
const numbers2 = numbers.map(item => (item > 10) ? item / 2 : item);
const numbers3 = numbers.map(item => (item > 10) ? item / 2 : -1);
console.log(numbers2);
console.log(numbers3);
skills.map((item, index) => {
    console.log(index, item);
}) 
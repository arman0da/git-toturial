const skills = ["JavaScript", "Nodejs", 'js', "Expressjs", "MongoDB"];
const numbers = [2, 5, 8, 6, 4, 7, 10, 25, 98];

numbers.sort((a, b) => {
   if(a > b) return 1;
   if(a == b) return 0;
   if(a < b) return -1;
});
numbers.sort((a, b) => {
   return a - b
});
numbers.sort((a, b) => b - a);
skills.sort();
console.log(numbers);
console.log(skills);
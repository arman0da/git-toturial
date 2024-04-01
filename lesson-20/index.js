// Expression Function

let sum = function (num1, num2) {
  return num1 + num2;
};

let min = function (num1, num2) {
  return num1 < num2 ? num1 : num2;
};

function pow(num1, num2) {
  let temp = 1;
  for (let count = 0; count < num2; count++) {
    temp *= num1; // temp = temp * num1
  }
  return temp;
}

//Arrow Functions

// let sum1 = (num1, num2) => {
//     return num1 + num2;
// }

let sum1 = (num1, num2) => num1 + num2;
console.log(sum1(7, 3));

let min1 = (num1, num2) => (num1 < num2 ? num1 : num2);
console.log(min1(10, 20));

let pow1 = (num1, num2) => {
  let temp = 1;
  for (let count = 0; count < num2; count++) {
    temp *= num1; // temp = temp * num1
  }
  return temp;
};

console.log(pow1(2, 3));
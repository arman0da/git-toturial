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

function sayHello() {
  console.log("Hi There");
}

sayHello();

function log(message, name) {
  console.log(message, name);
}

log("Arman is Here", "Hi Arman");

// alert('Hello Alert');

////////////////////////////////////////////////////////////////////////////////////////////////////

// Declaration Function

function primeNumber(userInput) {
  if (typeof userInput == "number") {
    let temp = 0;
    for (let count = 0; count <= userInput; count++) {
      if (userInput % count == 0) {
        temp++;
      }
    }
    if (temp == 2) {
      console.log("adade aval:", userInput);
    } else {
      console.log("invalid input");
    }
  }
}

primeNumber(1);
primeNumber(2);
primeNumber(3);
primeNumber(4);
primeNumber(5);
primeNumber(6);
primeNumber(7);
primeNumber(8);
primeNumber("abc");

function myCar(cars, topSpeed) {
    console.log(cars, topSpeed);
}

myCar('Ferrari', '350km');
myCar('Lamborghini', '340km');
myCar('Porsche', '330km');

function showMessage(text) {
  // if(text == undefined) {
  //   text = 'empty message';
  // }
  // if(!text) {
  //   text = 'empty message';
  // }
  // text = text || 'empty message'
  text = text ?? "empty message";
  alert(text);
}

//

function sum(number1, number2) {
  if (typeof number1 == "number" && typeof number2 == "number") {
    return number1 + number2;
  }

  console.log("enter valid number");
}

let result = sum(5, 4);
// console.log(result);


function min(num1, num2) {
  if(num1 < num2) {
    return num1
  } else {
    return num2
  }
  // if(num1 < num2) return num1;
  // else return num2;
  // if(num1 < num2) return num1;
  // return num2;
  // return (num1 < num2) ? num1 : num2;
}

// console.log(min(4, 5));

console.log(pow(2, 4));

function pow(num1, num2) {
  let temp = 1;
  for(let count = 0; count < num2; count++) {
    temp *= num1 // temp = temp * num1
  }
  return temp;
}


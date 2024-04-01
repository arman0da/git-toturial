// Expression Function Or Function Expression

let saySomething = function () {
    alert('javascript is fun');
}

// saySomething();

let showOk = function () {
    alert('Yes, I Am');
}

let showCancel = function () {
    alert('No I Am Not');
}

let Ask = function (question, yes, no) {
    confirm(question) ? yes() : no();
}

// Ask('Are you javascript developer', showOk, showCancel);

let sum = function (num1, num2) {
    return num1 + num2;
}

console.log(sum(5, 2));

//Ternary Operator - Nullish Operator
let isLoggedIn;
let username = "user",
  password = "pass";
if (username == "user" && password == "pass") {
  isLoggedIn = true;
} else {
    isLoggedIn = false;
}

let condition = username == "user" && password == "pass";
let isLoggedIn2 = condition ? true : false;
let isLoggedIn3 = condition;
console.log(isLoggedIn, isLoggedIn2, isLoggedIn3);

const blogs = 'blogs';
console.log(blogs??'not found any blog');
console.log(null??true, undefined??52, false??'anythings', 0??5);
let x = ""??"-";
let y = 0??'xyz';
console.log(x, y);
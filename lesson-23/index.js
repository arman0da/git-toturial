let arr = new Array();
let arr2 = [1, 2, 3, 4, 5, 6];
const userAge = [12, 11, 20, 45, 25, 65, 58];
const userNames = ["Arman", "Ali", "X", "Y"];
const places = ["Store", "School", "University", "Club"];
console.log(userAge);
console.log(userNames);
console.log(places);

console.log(userAge[0], userNames[0], places[0]);

let title = ["ID", "Name", "userName", "Age", "Email"];
let user = [1, "Arman", "arman7da", 25, "arman@gamil.com"];
let users = [
  ["ID", "Name", "userName", "Age", "Email"],
  [1, "Arman", "arman7da", 25, "arman@gamil.com"],
  [2, "ali", "ali98", 24, "alin@gamil.com"],
  [3, "man", "man85", 21, "man@gamil.com"],
  [4, "x", "x56", 18, "x@gamil.com"],
  [5, "z", "z25", 20, "z@gamil.com"],
];

console.log(users.length, userAge.length, userNames.length);
console.log(users.at(-1));
console.log(users.at(-2));
console.log(userAge.push(10));
console.log(userAge.pop());
console.log(userAge.shift());
// userAge.push(10);
// userAge.pop();
// userAge.shift();
userAge.unshift('index');
userAge[1] = 50;
userAge[50] = 2000;
userAge[55] = 2000;
console.log(userAge);
console.log([1][0] == [1][0]);

// shift  <-                  pop ->
             0, 1, 2, 3, 4
// unshift ->                 push <-
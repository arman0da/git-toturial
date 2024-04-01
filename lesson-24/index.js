const userNames = ["Arman", "Ali", "X", "Y"];
const numbers = [10, 2, 6, 8, 7];
console.log(userNames.length);
for (let index = 0; index < userNames.length; index++) {
  console.log(userNames[index]);
}

for (const name of userNames) {
  console.log(name);
}

let temp = 0;
for (const num of numbers) {
  temp += num;
}
console.log(temp);

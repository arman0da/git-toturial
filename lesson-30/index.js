let myStringList = "A, B, C, X, Y, Z";
const arr = myStringList.split(", ");
console.log(arr);
const newText = arr.join(", ");
console.log(newText);
console.log(newText.split(' - '));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numbers.reduce((perv, curr) => {
        return perv + curr
}, 0);

let perv = 0;
for (const curr of numbers) {
    perv += curr;
}
console.log("Reduce: ", result);
console.log("Reduce: ", perv);

console.log(Array.isArray());



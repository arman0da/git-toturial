let temp = 0;
for(let index = 20; index >= 0; index--) {
    temp += index; // temp = temp + index
}

for(let index = 200; index >= 0; index -= 10) {
    temp += index; // temp = temp + index
    console.log(index);
}

for(let index = 0; index <= 40; index += 5) {
    temp += index; // temp = temp + index
    console.log(index);
}

console.log(temp);
let x = 20;
x *= 2; // x = x * 2;
console.log(x);

let y = 24;
y /= 2; // x = x / 2;
console.log(y);

console.log(y **= 2);

console.log(y -= 44);
// spread and rest 

function getArgs(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [4, 5, 6]
getArgs(...num);

const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [6, 7, 8, 9, 10];
const mixedNumbers = [...numbers1.reverse(), ...numbers2.reverse()];
const char = [...'Hello JavaScript'];
console.log(char);

const object1 = {
    a: 1,
    b: 2,
    c: 3
}

const object2 = {
    c: 4,
    d: 5,
    e: 6
}

const copy = {...object1, ...object2}
console.log(copy);
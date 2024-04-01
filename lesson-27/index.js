const skills = ["JavaScript", "Nodejs", 'js', "Expressjs", "MongoDB"];
console.log(skills.includes('Nodejs'));
console.log(skills.includes('react'));

console.log(skills.some(item => item == 'MongoDB'));
console.log(skills.some(item => item == 'js'));
console.log(skills.some(item => item == 'flutter'));

console.log(skills.every(item => item == 'js'));
console.log(skills.every(item => item.length > 1));

console.log(skills.findIndex(item => item == 'Expressjs'));
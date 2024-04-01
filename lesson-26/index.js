const skills = ["JavaScript", "Nodejs", 'js', "Expressjs", "MongoDB"];

for (const item of skills) {
  if (item == "JavaScript") {
    console.log("this is best language for web");
  }
}

function itemCounter(item, key) {
  console.log(key, ":", item);
}

skills.forEach(itemCounter);
console.log("______________________________");
skills.forEach(function (item, key) {
  console.log(item, key);
});
console.log("______________________________");
skills.forEach((item, key) => {
  console.log(item);
});
console.log("______________________________");
const result = skills.find((item) => {
  if (item === "Nodejs") {
    return item;
  }
});
console.log(result);
const findValue = skills.find((skill) => skill == "MongoDB");
console.log(findValue);

const newArr = skills.filter(skill => skill.indexOf('js') > -1)
console.log(newArr);
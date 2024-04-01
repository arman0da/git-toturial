console.log(false && 5 && 'Hi My Name is...' && [])

let accessAge = 18;
let userAge = 27;
// true, truthy, condition
if(true && 5 && 'Hi My Name is...' && [] && 5 > 1 && userAge > accessAge) {
    console.log('truthy');
} else {
    console.log('falsy');
}

if(false || 0 || '' || [] || 5 < 1 || userAge > accessAge) {
    console.log('truthy');
} else {
    console.log('falsy');
}
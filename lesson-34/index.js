let user = {
    id: 'arman7da',
    firstName: 'Arman',
    lastName: 'DA',
    age: 25
}

const address = {
    street: 'anyWhere',
    alley: 'node js',
    zipCode: 123456789
}

const security = {
    userName: 'admin',
    password: 1234,
    email: 'arman98da@gmail.com'
}
const newAddress = {...address};

Object.assign(user, {address : {...address}}, {security : {...security}}, {key : 'value'});
address.alley = 'NestJS'
console.log(user);
console.log(newAddress);
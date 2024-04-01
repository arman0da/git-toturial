let user = {
    id: 'arman7da',
    firstName: 'Arman',
    lastName: 'DA',
    age: 25
}

const keys = Object.keys(user);
const values = Object.values(user);
Object.defineProperty(user, 'key', {
    value: 'some value',
    configurable: true,
    enumerable: true,
    writable: true
});

Object.freeze(user);
user.key = 'new value';
delete user.key;
console.log(Object.getOwnPropertyDescriptor(user, 'firstName'));
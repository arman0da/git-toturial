let user = {
    id: 'arman7da',
    firstName: 'Arman',
    lastName: 'DA',
    age: 25,
    obj: {
        key: 'value'
    }
}

const obj = JSON.parse(JSON.stringify(user, null, 4))
console.log(obj);
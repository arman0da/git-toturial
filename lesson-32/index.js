let title = 'javascript';
let user = {
    firstName: 'Arman',
    lastName: 'DA',
    age: 25,
    id: 12345678910,
    address: {
        province: 'Tehran',
        city: 'Tehran',
        town: 'Moniriyeh',
        street: 'Kamali',
        alley: 'Momtazi',
        zipCode: 2055
    },
    let: 2,
    return: 1,
    for: 5,
    [title + '-' + '150'] : 45,
    'کلید': 'name',
    0: 'zero'
}

user.role = 'admin';
user.security = {
    username: 'admin',
    email: 'admin@gmail.com',
    password: '1234'
}
user['birthDate'] = '4/1/1998';
user['palaceOfBorn'] = 'Tehran';
user.age = 30;
console.log(user.role, user['birthDate'], user['age'], user['role']);
console.log(user);
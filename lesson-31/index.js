let object = {
    str : 'value1',
    num : 2,
    arr : [1, 2, 3],
    bool : true,
    func : function() {
        return'Hello Object';
    }
}

console.log(object.str);
console.log(object.num);
console.log(object.arr);
console.log(object.bool);
console.log(object.func());

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
    }
}

user.role = 'user',
console.log(user);
function showMessage(param1, param2, param3, text = "empty message") {
  // if(text == undefined) {
  //   text = 'empty message';
  // }
  // if(!text) {
  //   text = 'empty message';
  // }
  // text = text || 'empty message'
  // text = text ?? "empty message";
  alert(text);
}

// function names

//   showMessage , showModal, showProfile
//   getAge, getUsers, getBalance, getProduct
//   calcSum, calcBasket,
//   createUser, createForm, createMenu, createProduct

function anyThing() {
  for (let index = 0; index <= 20; index++) {
    if (index % 5 == 0) continue;
    console.log(index);
    if (index % 11 == 0) break;
  }
}

function any() {
  nextPrime: for (let index = 2; index <= 20; index++) {
    for (let count = 2; count < index; count++) {
      if (index % count == 0) continue nextPrime;
    }
    console.log(index);
  }
}
any();

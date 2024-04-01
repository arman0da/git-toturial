// local & global variables

let message = "this is a global scope";

function anyThing() {
  let message = "this is a anyThing scope";
  console.log("anyThing:", message);
  function showMessage() {
    let message = "this is a showMessage scope";
    console.log("showMessage:", message);
    function any() {
      let message = "this is a any scope";
      console.log("any:", message);
    }
    any();
  }
  showMessage();
}
console.log("Global Scope:", message);
anyThing();

{
  let scope = "scope0";
  {
    // let scope = 'scope1';

    {
      // let scope = 'scope2';
      console.log(scope);
    }
  }
}

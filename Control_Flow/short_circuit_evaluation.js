/*
    true || true => true
    true || false => true

    true && true => true
    true && false => false
*/

// true || true -> if it sees true and || at the start then ignore second half

// console.log(true || false);

printTrue() || printFalse();

function printTrue() {
  console.log("true");
  return true;
}

function printFalse() {
  console.log("false");
  return false;
}

//Doesn't execute the second function
//Will work if printFalse() || printTrue()

//Scenarios for using || short circuiting
function printName(name) {
  name = name || "Default"; //Same as the if check
  //   if (name == null) {
  //     name = "default";
  //   }
  console.log(name);
}

printName();

//Scenarios for using && short circuiting

const person = {
  name: "Karl",
  address: {
    street: "main st",
  },
};

// if (person != null && person.address != null) {
//   console.log(person.address.street);
// }

console.log(person && person.name && person.address && person.address.street);

for (let i = 0; i < 5; i++) {
  console.log(i);
}

let i = 0;
while (i < 5) {
  //Condition true/false
  console.log(i);
  i++;
}

//While loops better when the length of the loop is unknown e.g, nested objects

const person = {
  name: "Karl",
  friend: {
    name: "Joe",
    friend: {
      name: "Sally",
    },
  },
};

let currentPerson = person;
while (currentPerson.friend != null) {
  if (currentPerson.name == "Joe") {
    break;
  }
  console.log(currentPerson);
  currentPerson = currentPerson.friend;
}

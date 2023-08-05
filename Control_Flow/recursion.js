// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// //using recursion
// function printNumber(number) {
//   if (number > 10) {
//     return;
//   }
//   console.log(number);
//   printNumber(number + 1);
// }

// printNumber(1);

//Sum of numbers between 1 and 10

// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//   sum = sum + i;
// }

// console.log(sum);

// function sumNumbersBelow(number) {
//   if (number <= 0) return 0;
//   return number + sumNumbersBelow(number - 1);
// }
// console.log(sumNumbersBelow(2));

// const person = {
//   name: "Kyle",
//   friend: {
//     name: "Joe",
//     friend: {
//       name: "Sally",
//     },
//   },
// };

// let currentPerson = person;
// while (currentPerson != null) {
//   console.log(currentPerson.name);
//   currentPerson = currentPerson.friend;
// }

//Recursive version
//1.Pass the person to the function
//2.Print out the name inside of that function
//3.Get their friend and no more friend

const person = {
  name: "Kyle",
  friend: {
    name: "Joe",
    friend: {
      name: "Sally",
    },
  },
};

let currentPerson = person;

function printNames(person) {
  //Base case => No friend
  if (person.friend == null) return console.log(person.name);
  console.log(person.name);
  printNames(person.friend);
}

printNames(currentPerson);

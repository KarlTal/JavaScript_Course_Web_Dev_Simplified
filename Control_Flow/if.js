const userIsLoggedIn = false;
const isOnDashboard = true;

if (userIsLoggedIn && isOnDashboard) {
  //Type coercion converts value to true or false
  console.log("User logged in");
} else {
  console.log("Please login");
}

/*
    0  = false
    '' = false
*/

const totalPrice = 100;

if (totalPrice == null) {
  console.log("There is no total price");
} else if (totalPrice < 10) {
  console.log("This is pretty cheap!");
} else if (totalPrice < 50) {
  console.log("This is not too bad!");
} else {
  console.log("This is expensive!");
}

//Exercise
//Create a variable that contains an array
//Using an if statement with else if blocks, check the length of the array

//If the array is empty print empty
//Has less than 5 elements print out small
//Less than 10 elements print out medium
//Otherwise print out large

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

if (array.length == 0) {
  console.log("empty");
} else if (array.length < 5) {
  console.log("small");
} else if (array.length < 10) {
  console.log("medium");
} else {
  console.log("large");
}

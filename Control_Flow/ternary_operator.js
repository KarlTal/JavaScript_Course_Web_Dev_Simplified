const isUserLoggedIn = true;

// if (isUserLoggedIn) console.log("User is logged in"); -> single line

if (isUserLoggedIn) {
  console.log("User is logged in");
} else {
  console.log("Not logged in ");
}

// ? Checks if true
//: Code if false
//Only use when you set a variable based on true or false value

isUserLoggedIn
  ? console.log("User is logged in")
  : console.log("Not logged in ");

// let welcomeMessage = "";

// if (isUserLoggedIn) {
//   welcomeMessage = "welcome";
// } else {
//   welcomeMessage = "Please log in";
// }

//Checks and returns the value after evaluation => if true returns and set welcome as the value
const welcomeMessage = isUserLoggedIn ? "welcome" : "Please log in";

console.log(welcomeMessage);

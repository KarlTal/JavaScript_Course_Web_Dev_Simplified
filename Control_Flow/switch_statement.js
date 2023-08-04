const favouriteAnimal = "quokka";

/* Too long
if (favouriteAnimal === "cat") {
  console.log("cats are pretty cool");
} else if (favouriteAnimal === "dog") {
  console.log("They are kinda loud");
} else if (favouriteAnimal === "shark") {
  console.log("That is an interesting choice");
} else {
  console.log("That is cool but I am unfamiliar with that animal");
}
*/

switch (favouriteAnimal) {
  case "bobcat":
  case "cat":
    console.log("cats are pretty cool");
    break; //Need else the rest of the cases will be executed
  case "dog":
    console.log("They are kinda loud");
  //break
  case "shark":
    console.log("That is an interesting choice");
  //break
  default:
    console.log("That is cool but I am unfamiliar with that animal");
}

const number = 3;

//Create a switch that checks to see the value of the number variable
//If the number is 0 print out "It is zero"
//If the number is 1 or 2 print out "It is small"
//If the number is 3 or 4 print out "It is medium"
//If the number is 5 print out " It is large"
//If the number is none of these print out "Try again"

console.log(number);
switch (number) {
  case 0:
    console.log("It is zero");
    break;
  case 1:
  case 2:
    console.log("It is small");
    break;
  case 3:
  case 4:
    console.log("It is medium");
    break;
  case 5:
    console.log("It is large");
    break;
  default:
    console.log("Try again");
}

for (let i = 0; i < 5; i++) {
  console.log("start" + i);
  if (i > 2) continue;
  console.log("end" + i);
}

console.log("bye");
//Define the variable for starting
//Define ending point
//Define how to modify our variable

const array = ["a", "b", "c"];
/*Older without a.forEach

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}
*/

//Create a for loop that loops from 0 - 10 and print out
//all values from 0 - 10

//Modify the loop and exit when the value is == 5 and break

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    break;
  } else {
    console.log("Value = " + i.toString());
  }
}

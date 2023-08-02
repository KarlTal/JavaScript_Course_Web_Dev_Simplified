//Define comma delimited arrray -> element, comma etc
//Starts at zero index
//Can add an extra comma at the end
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array);
//Outputting the first element
console.log(array[0]);

//Push function -> add new element to the end
array.push(11);

//Pop function -> remove final element
array.pop();
console.log(array);

//Array in an array -> nested array
array.push([12, 13]);

console.log(array);
console.log(array[10][0]);

const a = [
  ["hi", "bye"],
  [1, 2],
];

console.log(a[0][0]);

//Exercise -> Create array with the first 5 letters of the alphabet and print out the middle element (C)
const alphabet = ["a", "b", "c", "d", "e"];
console.log(alphabet[2]);

//Exercise 2 -> Print out 4, 8 ,11
const b = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];

console.log(
  b[0][3].toString() + " " + b[1][2].toString() + " " + b[2][0].toString()
);

//Length of an array
const c = [1, 2, 3, 4, 5];
console.log(c.length);

//Access specific element

const arrayOne = ["a", "b", "c", "d"];

console.log(arrayOne[1]);
console.log(arrayOne.at(1));

//Access elements with negative indices -> elements are counted from the end of the array
console.log(arrayOne.length);
console.log(arrayOne[arrayOne.length - 1]);
console.log(arrayOne.at(-1));
console.log(array[-1]);

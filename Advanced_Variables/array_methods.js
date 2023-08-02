const a = [1, 2, 3, 4, 5];
const b = [2, 4, 6, 8, 10];
a.forEach((number, index) => {
  console.log(number + " " + index);
}); //Takes a function

const newA = a.map((number) => {
  return number * 2;
}); //Loop through everything and return something, does not modify the original array

console.log(a);
console.log(newA);

const newA2 = a.filter((number) => {
  //Loops through and filter down elements
  return number <= 2; //true keep everything, false don't keep the value1
});

console.log(newA2);

const newA3 = a.find((number) => {
  //Finds the first occurence and returns it
  return number > 2;
});

console.log(newA3);

//some function => loop and ask if at least one any elements match this value
//every function =>if every elements meets the defined condition
const isTrue = a.some((number) => {
  return number > 2;
});

console.log(isTrue);

//reduce => reduces to a singular value takes 2 paramaters
//Value at the bottom is the default value
const s = a.reduce((sum, number) => {
  return sum + number;
}, 0); //sum defined as 0 initially

console.log(s);

//Exercise
const items = [
  { price: 10 },
  { price: 20 },
  { price: 14 },
  { price: 1 },
  { price: 6 },
];

const itemSum = items.reduce((sum, item) => {
  return sum + item.price;
}, 0);

console.log(itemSum);

//includes => checks if value exists in the array
const isItTrue = a.includes(2);
console.log(isItTrue);

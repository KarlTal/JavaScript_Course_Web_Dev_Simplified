function sayHi(name) {
  let result = "Hi " + name;
  console.log(result);
}

let result = "Karl";
sayHi(result);

let c = 3;

{
  let a = 1;
  {
    let b = 2;
    console.log(a);
    console.log(b);
    console.log(c);
  }
}

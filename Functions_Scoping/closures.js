function print(variable) {
  let c = 3;
  return function func(variable2) {
    console.log(variable);
    console.log(variable2);
  };
}

let a = print(1);
a(2);

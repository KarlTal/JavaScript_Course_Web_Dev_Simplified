const button = document.querySelector("[data-btn");

button.addEventListener("click", (e) => {
  console.log("Arrow This");
  console.log(this);
}); //Arrow -> behave with normal scoping rules this === window

button.addEventListener("click", function (e) {
  console.log("Function This");
  console.log(this); //If need to access the current object just use e.target
}); //Normal -> this based on where the function is called

//this === window object in the global scope

console.log(window); //The global object for the entire console.log == window.console.log

window.console.log("Hi");

alert("Hi"); //Same as window.alert("Hi"), only used when the name of the function is defined as a variable

//Event listener
window.addEventListener("resize", () => {
  console.log("Resize");
});

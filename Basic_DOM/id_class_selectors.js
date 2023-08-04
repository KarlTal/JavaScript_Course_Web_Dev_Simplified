const divWithId = document.getElementById("div-id");

divWithId.style.color = "red";

// const divsWithClass = document.getElementsByClassName("div-class");
const divsWithClassArray = Array.from(
  document.getElementsByClassName("div-class")
);

//console.log(divsWithClass);
//cannot do divsWithClass.style.color as this will return an HTML collection of elements with the specified class

// const divsWithClassArray = Array.from(divsWithClass);

divsWithClassArray.forEach((div) => (div.style.color = "green")); //The list returned is not an array
divsWithClassArray[0].style.color = "blue";

console.log(divWithId);

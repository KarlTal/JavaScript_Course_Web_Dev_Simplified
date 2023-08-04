//Pass a CSS selector
const dataAttributeElement = document.querySelector("[data-test]"); //Data attribute
//<div data-test> This has a data attribute</div>
const divsWithClasses = document.querySelectorAll(".div-class");
console.log(dataAttributeElement);

//May need to convert to array using Array.from() to use methods like map
dataAttributeElement.style.color = "green";
divsWithClasses.forEach((div) => (div.style.color = "red"));
console.log(divsWithClasses);

const input = document.querySelector("body > input[type='text']"); //Select input of type text in the body
input.placeholder = "Enter text here";
console.log(input);

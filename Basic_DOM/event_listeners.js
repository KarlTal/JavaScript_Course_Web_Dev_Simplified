const button = document.querySelector("[data-btn");
const input = document.querySelector("[data-input-text]");
const form = document.querySelector("[data-form]");
function printClick() {
  console.log("clicked");
}

// button.addEventListener("click", () => {
//   console.log("Clicked");
// }); //Takes 2 properties, event to listen for, using anonymous function

// button.addEventListener("click", () => {
//   console.log("Clicked 2");
// });

//button.addEventListener("click", printClick);
//Remove an event listener
//button.removeEventListener("click", printClick);

//Events give Event Object

button.addEventListener("click", (e) => {
  console.log(e);
}); // Passed an event object as e or event

input.addEventListener("change", () => {
  console.log("changed");
});

//Check if empty input has a value or not
input.addEventListener("input", (e) => {
  console.log(e.target.value === "");
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); //Prevent submitting the form
  console.log("Submitted form");
}); //By default form submitted to the current page as there is no location specified

//Exercise
//Add anchor tag to html, when it is clicked prevent default and log something to the console.
const anchor = document.querySelector("[data-anchor]");

anchor.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Tricked ya!");
});

/*
    Some types of event listeners 
    mouseenter 
    mouseleave 
    mouseover
    focus => click, press tab 
    blur => on and then went off, had focus then lost it
    window.addEventListner('resize () => console.log("resized"))
*/

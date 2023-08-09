const buttons = document.querySelectorAll("button");
/*

document.addEventListener(
  "click",
  () => {
    console.log("Clicked Document");
  }
  //   ,{ capture: true }
);
document.body.addEventListener(
  "click",
  () => {
    console.log("Clicked Body");
  }
  //   ,{ capture: true }
); //Default is false start from bubble phase

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.stopPropagation(); //Not propagate -> dont bubble just stop
    console.log("Clicked Button");
  });
});

//Delegation means events are delegated to all different things that gets clicked
//Everything else in the chain, body, document, button

//Capturing is the first stage
//Go through the elements from the outer (document) to the most inner (button)

//Bubbling
//Starts from the inner most thing and event bubbles from the button to body to document
*/

//Create a new button

//Using delagation to

document.addEventListener("click", (e) => {
  if (e.target.matches(".cool")) {
    //Takes CSS selection same as query selecter if the e.target matches the selecter returns true
    console.log("Clicked button");
  }
  //   console.log(e.target);
});

//Button doesnt exist at the time of the query
const newButton = document.createElement("button");

newButton.innerText = "Button 5";
document.body.append(newButton);
// newButton.addEventListener("click", () => {
//   console.log("Clicked Button");
// });

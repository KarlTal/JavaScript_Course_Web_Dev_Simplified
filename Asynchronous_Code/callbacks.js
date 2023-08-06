//Asynchronous outside first then hi
setTimeout(() => {
  console.log("hi");
}, 1000);

console.log("outside");

const button = document.querySelector("button");

addClickEventListener(button, () => {
  console.log("clicked");
});
// button.addEventListener("click", () => {
//   console.log("clicked");
// });

//Callback function passed to another function to be executed
//at another time based on some specific condition
//event, time, getting data, etc

function addClickEventListener(element, callback) {
  element.addEventListener("click", callback);
}

//Callback hell => Fixed with promises
setTimeout(() => {
  console.log("inside");

  setTimeout(() => {
    console.log("inside 2");

    setTimeout(() => {
      console.log("inside 3");
    }, 1000);
  }, 1000);
}, 1000);

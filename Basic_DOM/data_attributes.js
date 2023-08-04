//Use data attributes to add or read information from elements

/*
const test = document.querySelector("[data-test]");

test.dataset; //A JS Object of all the data attributes

console.log(test.dataset.testTwo); //data-test => test = key,

test.dataset.test = "5555";
*/

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentClicks = parseInt(button.dataset.clicks);

    button.dataset.clicks = currentClicks + 1;
  });
});

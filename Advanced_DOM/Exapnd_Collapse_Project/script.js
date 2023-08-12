//Show or hide card-body

//Select all the cards
//Select all the buttons
const cards = document.querySelectorAll(".card");
const expandButton = document.querySelectorAll("button");

//Check which card expand/collapse button is pressed
expandButton.forEach((button) => {
  document.addEventListener("click", (e) => {
    console.log(e.target);
    //Select the parent
    const cardParent = button.closest(".card");
    console.log(cardParent);
    //Select the child of that parent
    const cardBodyChild = cardParent.querySelector(".card-body");
    console.log(cardBodyChild);
    //Add show class if not there else remove
    if (cardBodyChild.classList.contains("show")) {
      //Else remove show and change innerHTML text to Expand
      cardBodyChild.classList.remove("show"); //Use toggle cardBodyChild.classList.toggle('show)
      button.innerHTML = "Expand"; // button.target.innerText = button.target.innerText === 'Expanded' ? 'Collapsed : 'Expanded'
    } else {
      //Add class show and change innerHTML text to Collapse
      cardBodyChild.classList.add("show");
      button.innerHTML = "Collapse";
    }
  });
});

document.addEventListener("click", (e) => {
  if (!e.target.matches(".expand-button")) return;

  const card = e.target.closest(".card");
  const cardBody = card.querySelector(".card-body");

  cardBody.classList.toggle("show");
  if (e.target.innerText === "Expand") {
    e.target.innerText = "Collapse";
  } else {
    e.target.innerText = "Expand";
  }
  // e.target.innerText = e.target.innerText === "Expand" ? "Collapse" : "Expand"
});

// //Adding a new element
const template = document.querySelector("#card-template");
function addNewCard(data) {
  //Using template
  const templateClone = template.content.cloneNode(true); // Clone into template clone
  const cardBody = templateClone.querySelector(".card-body");
  const button = templateClone.querySelector("button");
  cardBody.innerText = data;
  //Persist checked data
  cardBody.classList.add("show");
  button.innerHTML = "Collapse";
  document.body.appendChild(templateClone);
}

addNewCard("Slayer");
addNewCard("Beyonce");

/* Original -> When adding new cards does not work
//Check which card expand/collapse button is pressed
expandButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target);
    //Select the parent
    const cardParent = button.closest(".card");
    console.log(cardParent);
    //Select the child of that parent
    const cardBodyChild = cardParent.querySelector(".card-body");
    console.log(cardBodyChild);
    //Add show class if not there else remove
    if (cardBodyChild.classList.contains("show")) {
      //Else remove show and change innerHTML text to Expand
      cardBodyChild.classList.remove("show"); //Use toggle cardBodyChild.classList.toggle('show)
      button.innerHTML = "Expand"; // button.target.innerText = button.target.innerText === 'Expanded' ? 'Collapsed : 'Expanded'
    } else {
      //Add class show and change innerHTML text to Collapse
      cardBodyChild.classList.add("show");
      button.innerHTML = "Collapse";
    }
  });
});
*/

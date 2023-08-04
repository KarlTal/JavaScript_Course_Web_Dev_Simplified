const grandParent = document.querySelector("#grand-parent");
const parentOne = grandParent.children[0];
const parentTwo = parentOne.nextElementSibling;
const parentOneChildOne = parentOne.children[0];
const parentOneChildTwo = parentOne.children[1];

//Get a parent element from a child element
const childOne = document.querySelector("#child-one");
const parentOfChildOne = childOne.parentElement;
const theGrandParent = parentOfChildOne.parentElement;

//Jump all the way to the grand parent without jumping through
//Selects only parents and the first instance of the parent with the defined selector
const straightGrandParent = childOne.closest("#grand-parent"); //Selects elements that are a parent

//Get one of the children

//Get all the children
const children = grandParent.querySelectorAll(".child");

children.forEach((child) => (child.style.color = "purple"));

parentOne.style.color = "blue";
grandParent.style.color = "red";
parentTwo.style.color = "green";
parentOneChildOne.style.color = "magenta";
parentOneChildTwo.style.color = "purple";
parentOfChildOne.style.color = "yellow";
theGrandParent.style.color = "apricot";
straightGrandParent.style.color = "yellow";

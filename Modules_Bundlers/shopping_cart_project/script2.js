//Import JSON File
import dataJSON from "./items.json";
const data = JSON.stringify(dataJSON);
//Obtain containers for the items in the store page
const itemContainer = document.querySelector(".container.px-5");
const flexItemCointainer = itemContainer.children[0];

renderShoppingCart();

if (window.location.pathname == "/store.html") {
  populateStorePage();
}

//Shopping cart management

//Using local storage on adding and removing items
function renderShoppingCart() {
  const sections = document.querySelectorAll("section");
  const shoppingCartContainer = sections[1];
  const divShopping = shoppingCartContainer.children[0];
  const shoppingCartButton = shoppingCartContainer.children[1];

  //If there are no items in the local storage then hide the button
  if (parseInt(localStorage.length) > 0) {
    // console.log("items in cart");
    divShopping.classList.remove("invisible");
    shoppingCartButton.classList.remove("invisible");
    shoppingCartContainer.classList.remove("invisible");

    //Loop through each item in localStorage and add to the shoppingCartContainer
    //Todo
    for (let i = 0; i < localStorage.length; i++) {
      console.log(localStorage.key(i));
    }
  } else {
    // console.log("no items in cart");
    divShopping.classList.add("invisible");
    shoppingCartButton.classList.add("invisible");
    shoppingCartContainer.classList.add("invisible");
  }
}

//Population of items
function populateStorePage() {
  for (let i = 0; i < dataJSON.length; i++) {
    createItem(i);
  }
  flexItemCointainer.addEventListener("click", (e) => {
    if (!e.target.matches("[data-item-i-d]")) return;
    const button = e.target.closest("button");
    const itemID = JSON.stringify(button.dataset.itemID);
    //Check if in the cart
    if (localStorage.getItem(itemID) == null) {
      localStorage.setItem(itemID, 1);
      addToCart(button.dataset.itemID, itemID);
    } else {
      const quantity = parseInt(localStorage.getItem(itemID)) + 1;
      localStorage.setItem(itemID, quantity);
      updateQuantity(button.dataset.itemID, itemID);
    }
    renderShoppingCart();
  });
}

function updateQuantity(itemID, stringItemID) {
  const object = dataJSON.filter((item) => item.id == Number(itemID));
  // console.log(object);
  const itemQuantity = localStorage.getItem(stringItemID);
  // console.log(itemQuantity);
  const spanQuantityOfItem = document.querySelector(
    "span[data-item-i-d=" + CSS.escape(object[0].id) + "]"
  );

  spanQuantityOfItem.innerText = `x${itemQuantity}`; //Get Quantity

  //Item div price * quantity
  const itemTotalPriceDiv = document.querySelector(
    "div[data-identifier=" + CSS.escape(object[0].id) + "]"
  );

  const itemPrice = object[0].priceCents / 100;
  const totalPrice = Number(itemQuantity) * itemPrice;
  itemTotalPriceDiv.innerText = `$${totalPrice}`; //CalculateTotalPrice
}

function createItem(index) {
  const div = document.createElement("div");
  div.classList.add("lg:w-1/4", "md:w-1/2", "p-4", "w-full");
  div.dataset.itemID = dataJSON[index].id;
  flexItemCointainer.appendChild(div);

  //Inner div 1
  const divChildOne = document.createElement("div");
  divChildOne.classList.add(
    "block",
    "relative,h-48",
    "rounded",
    "overflow-hidden"
  );
  div.appendChild(divChildOne);

  //Get imageColor and append to the end of the src link
  let imageDivChildOne = document.createElement("img");
  imageDivChildOne.src = `https://dummyimage.com/420x260/${dataJSON[index].imageColor}/${dataJSON[index].imageColor}`;
  imageDivChildOne.alt = "e-commerce";
  divChildOne.appendChild(imageDivChildOne);

  //Inner div 2
  const divChildTwo = document.createElement("div");
  divChildTwo.classList.add("mt-4", "flex", "items-end", "justify-between");
  div.appendChild(divChildTwo);

  // Inner div 2 child
  const divChildTwoChild = document.createElement("div");
  divChildTwo.appendChild(divChildTwoChild);

  //Get category
  const h3 = document.createElement("h3");
  h3.classList.add(
    "text-gray-500",
    "text-xs",
    "tracking-widest",
    "title-font",
    "uppercase",
    "mb-1"
  );
  h3.innerText = dataJSON[index].category;
  divChildTwoChild.appendChild(h3);

  //Get name
  const h2 = document.createElement("h2");
  h2.classList.add("text-gray-900", "title-font", "text-lg", "font-medium");
  h2.innerText = dataJSON[index].name;
  divChildTwoChild.appendChild(h2);

  //Get priceCents
  const p = document.createElement("p");
  p.classList.add("mt-1");
  p.innerText = `$${dataJSON[index].priceCents / 100}`;
  divChildTwoChild.appendChild(p);

  const button = document.createElement("button");
  button.classList.add(
    "text-white",
    "py-2",
    "px-4",
    "text-xl",
    "bg-blue-500",
    "rounded",
    "hover:bg-blue-700"
  );
  button.innerText = "Add To Cart";
  button.dataset.itemID = dataJSON[index].id;
  divChildTwo.appendChild(button);
}

function addToCart(itemID, stringItemID) {
  const sections = document.querySelectorAll("section");
  const shoppingCartContainer = sections[1];
  const divShopping = shoppingCartContainer.children[0];
  const shoppingInnerDiv = divShopping.children[0].children[0];
  //Make new div
  const parentDiv = document.createElement("div");
  parentDiv.classList.add("mb-6");
  shoppingInnerDiv.appendChild(parentDiv);
  // Make innner div 1
  const innerDivOne = document.createElement("div");
  innerDivOne.classList.add(
    "block",
    "relative",
    "h-24",
    "rounded",
    "overflow-hidden"
  );
  parentDiv.appendChild(innerDivOne);

  // console.log(innerDivOne);

  //Make img
  const image = document.createElement("img");
  image.alt = "ecommerce";
  image.classList.add(
    "object-cover",
    "object-center",
    "w-full",
    "h-full",
    "block",
    "rounded"
  );
  const object = dataJSON.filter((item) => item.id == Number(itemID));
  const imageColor = object[0].imageColor;
  image.src = `https://dummyimage.com/210x130/${imageColor}/${imageColor}`;
  innerDivOne.appendChild(image);

  //Make button
  const removeItemButton = document.createElement("button");
  removeItemButton.classList.add(
    "absolute",
    "top-0",
    "right-0",
    "bg-black",
    "rounded-tr",
    "text-white",
    "w-6",
    "h-6",
    "text-lg",
    "flex",
    "justify-center",
    "items-center"
  );
  removeItemButton.innerHTML = `&times;`;
  innerDivOne.appendChild(removeItemButton);

  //   // Make inner div 2
  const innerDivTwo = document.createElement("div");
  innerDivTwo.classList.add("mt-2", "flex", "justify-between");
  parentDiv.appendChild(innerDivTwo);

  //Inner div 2 div child
  const innerDivTwoChild = document.createElement("div");
  innerDivTwoChild.classList.add("flex", "items-center", "title-font");
  innerDivTwo.appendChild(innerDivTwoChild);

  //h2
  const h2InnerDivTwoChild = document.createElement("h2");
  h2InnerDivTwoChild.classList.add("text-gray-900", "text-lg", "font-medium");
  const colorName = object[0].name;
  h2InnerDivTwoChild.innerText = `${colorName}`; //Get color name
  innerDivTwoChild.appendChild(h2InnerDivTwoChild);
  //span
  const spanQuantityOfItem = document.createElement("span");
  spanQuantityOfItem.classList.add(
    "text-gray-600",
    "text-sm",
    "font-bold",
    'ml-1"'
  );

  const itemQuantity = localStorage.getItem(stringItemID);
  spanQuantityOfItem.innerText = `${itemQuantity}`; //Get Quantity
  // console.log(itemQuantity);
  innerDivTwoChild.appendChild(spanQuantityOfItem);
  //Add item id to span
  spanQuantityOfItem.dataset.itemID = itemID;
  //   data-item-i-d=""
  //Item div price * quantity
  const itemTotalPriceDiv = document.createElement("div");
  const itemPrice = object[0].priceCents / 100;
  const totalPrice = Number(itemQuantity) * itemPrice;
  //Add item id to div
  itemTotalPriceDiv.dataset.identifier = itemID;
  itemTotalPriceDiv.innerText = `$${totalPrice}`; //CalculateTotalPrice
  innerDivTwoChild.appendChild(itemTotalPriceDiv);
}

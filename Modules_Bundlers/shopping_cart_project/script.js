//Import JSON File
import dataJSON from "./items.json";
const data = JSON.stringify(dataJSON);
//Obtain containers for the items in the store page
const itemContainer = document.querySelector(".container.px-5");
const flexItemCointainer = itemContainer.children[0];
const cartItemContainer = document.querySelector("[data-cart-items]");
//Shopping cart
let shoppingCart = [];
const cartQuantity = document.querySelector("[data-cart-quantity]");
const cartTotalPrice = document.querySelector("[data-total-price]");
const cart = document.querySelector("[data-cart]");
const shopping = document.querySelector("[data-cart-wrapper]");
const removeButton = document.querySelector("[data-remove]");
const cartButton = document.querySelector("[data-cart-button]");

//Session storage
const SESSION_STORAGE_KEY = "SHOPPING_CART-cart";

if (window.location.pathname == "/store.html") {
  populateStorePage();
}

renderShoppingCart();

document.addEventListener("click", (e) => {
  if (!e.target.matches("[data-remove]")) return;
  const itemID = parseInt(
    e.target.closest("[data-individual-item]").dataset.individualItem
  );
  console.log(itemID);
  removeItemFromCart(itemID);

  //removeButton
});

function showCart() {
  cart.classList.remove("invisible");
  shopping.classList.remove("invisible");
}

function hideCart() {
  cart.classList.add("invisible");
  // shopping.classList.add("invisible");
  console.log("yay");
}

function removeItemFromCart(itemID) {
  console.log("hello");
  console.log(itemID);
  const existingItem = shoppingCart.find((entry) => entry.id == itemID);
  console.log(existingItem);
  if (existingItem == null) return;
  shoppingCart = shoppingCart.filter((entry) => entry.id !== itemID);
  saveCart();
  renderShoppingCart();
}

//Using local storage on adding and removing items
function renderShoppingCart() {
  //Toggling invisible on and off
  const sections = document.querySelectorAll("section");
  const shoppingCartContainer = sections[1];
  const divShopping = shoppingCartContainer.children[0];
  const shoppingCartButton = shoppingCartContainer.children[1];
  const shoppingInnerDiv = divShopping.children[0].children[0];

  shoppingCart = loadCart();
  cartButton.addEventListener("click", (e) => {
    shopping.classList.toggle("invisible");
  });

  if (shoppingCart.length === 0) {
    hideCart();
  } else {
    showCart();
    cartItemContainer.innerHTML = "";
    cartQuantity.innerText = shoppingCart.length;
    //Calculating total
    const total = shoppingCart.reduce((sum, cartItem) => {
      const item = dataJSON.find((i) => cartItem.id === i.id);
      return sum + item.priceCents * cartItem.quantity;
    }, 0);
    cartTotalPrice.innerText = `$${total / 100}`; //formatCurrency()

    shoppingCart.forEach((cartItem) => {
      console.log(cartItem);
      const item = dataJSON.find((i) => cartItem.id === i.id);
      const shoppingInnerDiv = divShopping.children[0].children[0];
      //Make new div
      const parentDiv = document.createElement("div");
      parentDiv.classList.add("mb-6");
      parentDiv.dataset.individualItem = item.id;
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
      const imageColor = item.imageColor;
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
      removeItemButton.dataset.remove = "";
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
      h2InnerDivTwoChild.classList.add(
        "text-gray-900",
        "text-lg",
        "font-medium"
      );
      const colorName = item.name;
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
      innerDivTwoChild.appendChild(spanQuantityOfItem);
      spanQuantityOfItem.dataset.itemID = item.id;
      const itemTotalPriceDiv = document.createElement("div");
      itemTotalPriceDiv.dataset.identifier = item.id;
      const itemPrice = item.priceCents / 100;
      innerDivTwoChild.appendChild(itemTotalPriceDiv);
      if (cartItem.quantity > 1) {
        const itemQuantity = cartItem.quantity;
        spanQuantityOfItem.innerText = `x${itemQuantity}`; //Get Quantity
        const totalPrice = Number(itemQuantity) * itemPrice;
        itemTotalPriceDiv.innerText = `$${totalPrice}`; //CalculateTotalPrice
      } else {
        itemTotalPriceDiv.innerText = `$${itemPrice}`; //CalculateTotalPrice
      }
    });
  }
}

//Population of items
function populateStorePage() {
  for (let i = 0; i < dataJSON.length; i++) {
    createItem(i);
  }

  flexItemCointainer.addEventListener("click", (e) => {
    //Adding to cart click
    if (!e.target.matches("[data-item-i-d]")) return;
    const button = e.target.closest("button");
    const itemID = button.dataset.itemID;
    addToCart(itemID);

    //Check if not in the cart
    // if (localStorage.getItem(itemID) == null) {
    //   localStorage.setItem(itemID, 1);
    //   addToCart(itemID);
    // } else {
    //   const quantity = parseInt(localStorage.getItem(itemID)) + 1;
    //   localStorage.setItem(itemID, quantity);
    //   // updateQuantity(button.dataset.itemID, itemID);
    //   renderShoppingCart();
    // }
  });
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

function addToCart(itemID) {
  const existingItem = shoppingCart.find(
    (entry) => entry.id === parseInt(itemID)
  );
  if (existingItem) {
    existingItem.quantity++; //Add 1 to quantity
  } else {
    shoppingCart.push({ id: parseInt(itemID), quantity: 1 });
  }
  saveCart();
  renderShoppingCart();
}

//Persist data

function saveCart() {
  sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(shoppingCart));
}

function loadCart() {
  const cart = sessionStorage.getItem(SESSION_STORAGE_KEY);
  return JSON.parse(cart) || [];
}

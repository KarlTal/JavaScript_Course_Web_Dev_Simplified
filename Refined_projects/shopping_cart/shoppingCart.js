//Imports and variables
import formatCurrency from "./utilities/formatCurrency";
import dataJSON from "./items.json";
const shoppingCartWrapper = document.querySelector("[data-cart-wrapper]");
const shoppingCartContainer = document.querySelector("[data-cart-container]");
const cartItemTemplate = document.querySelector("#cart-item-template");
const imageSRC = "https://dummyimage.com/210x130";
const cartButton = document.querySelector("[data-cart-button]");
const cartQuantity = document.querySelector("[data-cart-quantity]");
const cartSection = document.querySelector("[data-cart]");
const cartTotalPrice = document.querySelector("[data-cart-total]");
//Shopping cart
let shoppingCart = [];

//Session storage
const SESSION_STORAGE_KEY = "SHOPPING_CART-cart";

function showCart() {
  cartSection.classList.remove("invisible");
}

function hideCart() {
  shoppingCartWrapper.classList.add("invisible");
  cartSection.classList.add("invisible");
}

function renderCart() {
  if (shoppingCart.length === 0) {
    hideCart();
  } else {
    showCart();
    renderCartItems();
  }
}

function renderCartItems() {
  //Calculating total price
  const total = shoppingCart.reduce((sum, cartItem) => {
    const item = dataJSON.find((i) => cartItem.id === i.id);
    return sum + item.priceCents * cartItem.quantity;
  }, 0);
  cartTotalPrice.innerText = formatCurrency(total / 100); //formatCurrency()

  //Update cart quantity
  cartQuantity.innerText = shoppingCart.length;
  //Clear the cart
  shoppingCartContainer.innerHTML = "";
  shoppingCart.forEach((entry) => {
    const item = dataJSON.find((i) => entry.id == i.id);

    const cartItem = cartItemTemplate.content.cloneNode("true");

    const container = cartItem.querySelector("[data-cart-item]");
    container.dataset.itemID = item.id;

    const name = cartItem.querySelector("[data-cart-item-name]");
    name.innerText = item.name;

    const image = cartItem.querySelector("[data-cart-item-image]");
    image.src = `${imageSRC}/${item.imageColor}/${item.imageColor}`;

    if (entry.quantity > 1) {
      const quantity = cartItem.querySelector("[data-cart-item-quantity]");
      quantity.innerText = `x${entry.quantity}`;
    }

    const price = cartItem.querySelector("[data-cart-item-price]");
    price.innerText = formatCurrency((item.priceCents * entry.quantity) / 100);

    shoppingCartContainer.appendChild(cartItem);
  });
}

export function setupShoppingCart() {
  document.addEventListener("click", (e) => {
    if (!e.target.matches("[data-remove-from-cart-button]")) return;
    const itemID = parseInt(
      e.target.closest("[data-cart-item]").dataset.itemID
    );
    removeFromCart(itemID);
  });

  shoppingCart = loadCart();
  renderCart();

  cartButton.addEventListener("click", (e) => {
    shoppingCartWrapper.classList.toggle("invisible");
  });
}

export function addToCart(itemID) {
  const existingItem = shoppingCart.find(
    (entry) => entry.id === parseInt(itemID)
  );
  if (existingItem) {
    existingItem.quantity++; //Add 1 to quantity
  } else {
    shoppingCart.push({ id: parseInt(itemID), quantity: 1 });
  }
  saveCart();
  setupShoppingCart();
}

function removeFromCart(itemID) {
  const existingItem = shoppingCart.find((entry) => entry.id == itemID);
  if (existingItem == null) return;
  shoppingCart = shoppingCart.filter((entry) => entry.id !== itemID);
  saveCart();
  setupShoppingCart();
}

function saveCart() {
  sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(shoppingCart));
}

function loadCart() {
  const cart = sessionStorage.getItem(SESSION_STORAGE_KEY);
  return JSON.parse(cart) || []; //Returns empty array if no key in storage
}

//Imports and variables
import formatCurrency from "./utilities/formatCurrency";
import dataJSON from "./items.json";
import { addToCart } from "./shoppingCart";
const storeItemTemplate = document.querySelector("#store-item-template");
const storeItemContainer = document.querySelector("[data-store-container]");
const imageSRC = "https://dummyimage.com/420x260";

//Setting up the store dynamically using templates

export function setupStore() {
  if (storeItemContainer == null) return;

  //Adding to cart
  document.addEventListener("click", (e) => {
    //Adding to cart click
    if (!e.target.matches("[data-store-item-add]")) return;
    const itemID = e.target.closest("[data-store-item]").dataset.itemID;
    addToCart(parseInt(itemID));
  });

  dataJSON.forEach((item) => {
    const storeItem = storeItemTemplate.content.cloneNode(true);

    const itemContainer = storeItem.querySelector("[data-store-item]");
    itemContainer.dataset.itemID = item.id;
    const storeItemImage = storeItem.querySelector("[data-store-item-img]");
    storeItemImage.src = `${imageSRC}/${item.imageColor}/${item.imageColor}`;

    const storeItemCategory = storeItem.querySelector(
      "[data-store-item-category]"
    );
    storeItemCategory.innerText = item.category;
    const storeItemName = storeItem.querySelector("[data-store-item-name]");
    storeItemName.innerText = item.name;
    const storeItemPrice = storeItem.querySelector("[data-store-item-price]");
    storeItemPrice.innerText = formatCurrency(item.priceCents / 100);

    storeItemContainer.appendChild(storeItem);
    //
  });
}

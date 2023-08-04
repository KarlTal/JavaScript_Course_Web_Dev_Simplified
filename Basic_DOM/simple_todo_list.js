// 1. Select all elements

const form = document.querySelector("#new-item-form");
const list = document.querySelector("#list");
const input = document.querySelector("#item-input");

// 2. When I submit a form add a new element
form.addEventListener("submit", (e) => {
  e.preventDefault();

  //1. Create a new item
  const item = document.createElement("div");
  item.innerText = input.value;
  item.classList.add("list-item");

  //2. Add the item to the list
  list.appendChild(item);
  //3. Clear input
  input.value = "";

  //4. Setup event listener to delete item when clicked
  item.addEventListener("click", () => {
    list.removeChild(item);
    //item.remove()
  });
});

function test() {
  console.log("test");
}

test(1, 23, 4, 4); //Ignore arguments as it takes 0 arguments

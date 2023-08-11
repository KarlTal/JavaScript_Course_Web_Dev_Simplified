const form = document.querySelector("#new-todo-form");
const todoInput = document.querySelector("#todo-input");
const list = document.querySelector("#list");
const template = document.querySelector("#list-item-template");
const LOCAL_STORAGE_PREFIX = "ADVANCED_TODO_LIST"; //Local Storage is site dependant
const TODOS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-todos`;

//Render todos on the page
let todos = loadTodos();
todos.forEach((todo) => renderTodo(todo)); //or renderTodo

//Checks which element changes (todo checkbox)
list.addEventListener("change", (e) => {
  if (!e.target.matches("[data-list-item-checkbox]")) return; //Doesnt match then return

  // Get the todo which is checked -> clicked on
  const parent = e.target.closest(".list-item");
  const todoID = parent.dataset.todoId;

  // Toggle complete property to equal to the checkbox value -> if checked true else false
  const todo = todos.find((t) => t.id === todoID); //Find the current todo
  todo.complete = e.target.checked; //True if checked else false

  // Save updated todo
  saveTodos();
});

//Add Todos
//User will type todo and click add todo button
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoName = todoInput.value;

  if (todoName === "") return; //Exit prematurely
  const newTodo = {
    name: todoName,
    complete: false,
    id: new Date().valueOf().toString(), //Assign a unique identifier to each todo
  };
  //Render todo
  //Refactored code
  todos.push(newTodo);
  renderTodo(newTodo);
  //   todos.push(todoName);
  //   renderTodo(todoName); //Throw complex stuff to function before creating
  saveTodos();
  todoInput.value = ""; //Clear input
});

//Add a todo to the list above
function renderTodo(todo) {
  //Using template

  const templateClone = template.content.cloneNode(true); // Clone into template clone
  const listItem = templateClone.querySelector(".list-item");
  listItem.dataset.todoId = todo.id; //Add an id to data
  const textElement = templateClone.querySelector("[data-list-item-text]");
  textElement.innerText = todo.name;
  //Persist checked data
  const checkbox = templateClone.querySelector("[data-list-item-checkbox");
  checkbox.checked = todo.complete;
  list.appendChild(templateClone);
}

//Save Todos
function saveTodos() {
  //Local storage
  localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos)); //Convert array to string
}
//Load Todos
function loadTodos() {
  const todosString = localStorage.getItem(TODOS_STORAGE_KEY); //If empty return undefined
  return JSON.parse(todosString) || []; //Returns an array if undefined return empty array
}

//Delete Todos

list.addEventListener("click", (e) => {
  if (!e.target.matches("[data-button-delete]")) return;

  const parent = e.target.closest(".list-item");
  const todoID = parent.dataset.todoId;

  //Remove todo from the screen
  parent.remove();
  //Remove todo from the list
  todos = todos.filter((todo) => todo.id != todoID); // Update the list of todos and remove the one to be deleted
  //Save the new todos
  saveTodos();
});

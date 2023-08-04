console.log(document.body);
console.log(document.documentElement);

const element = document.createElement("span");
element.innerText = "Hello World!";

document.body.appendChild(element);

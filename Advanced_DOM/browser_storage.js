// Local Storage | Cookies           | Session Storage
// 10MB          | 4KB               | 5MB
// Never Expires | Manual Expiration | Expire on tab close
// Client (user) | Client/Server     | Client
// Easy          | Hard              | Easy

//Shopping cart normally stored on session storages
//Cookies sent on every request (send data from client to server automatically)

window.localStorage.setItem("Name", "Kyle"); //Need a key, value(always a string)
sessionStorage.setItem("Age", "21");

localStorage.setItem("Name", "Sally"); //Updating => Setting an item will update/create
sessionStorage.removeItem("Age"); //Pass the key

console.log(localStorage.getItem("Name")); //Getting values
console.log(sessionStorage.getItem("Age"));

//Cookies
const date = new Date(9999, 0, 1).toUTCString(); //1st January 9999
console.log(date);
document.cookie = `name=Kyle; expires=${date}`; //Name=Value; Expiration
console.log(document.cookie);
//Adding a second cookie
document.cookie = `age=25;expires= ${date}`;

//Delete a cookie, need to reset and set with a blank value and expiration in the ast
const pastDate = new Date(2022, 0, 1).toUTCString();
document.cookie = `name=;expires=${pastDate}`;

//Use cookies to send data to server

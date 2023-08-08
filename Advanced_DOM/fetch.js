// Query information on the web through an API
//window.fetch === fetch and uses promises

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     //log the name of each of the users
//     data.forEach((user) => {
//       console.log(user.name);
//     });
//     data.map((user) => user.name);
//     console.log(data);
//     //console.log(data);
//   });

//Fetch will only throw an error if there is something wrong with the internal, lose internet etc

//Converted to async await version

const URL = "https://jsonplaceholder.typicode.com/users";
const singleUserURL = "https://jsonplaceholder.typicode.com/users/10";

async function getAllUsers() {
  const response = await fetch(URL);
  const users = await response.json();
  console.log(users.map((response) => response.name));
}

// getAllUsers();

const button = document.querySelector("button");
button.addEventListener("click", getSingleUser);

async function getSingleUser() {
  try {
    const response = await fetch(singleUserURL);
    if (response.ok) {
      const user = await response.json();
      console.log(user);
    } else {
      console.log("FAILURE");
    }
  } catch (e) {
    console.error("Error");
  }
}

// getSingleUser();

const postURL = "https://jsonplaceholder.typicode.com/posts";
async function postUser() {
  const response = await fetch(postURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "New post",
    }),
  });
  const post = await response.json();
  console.log(post);
}

// postUser();

//Get all the comments with the postID of 1

const getCommentsURL = "https://jsonplaceholder.typicode.com/comments?postId=1";

async function getComments() {
  const response = await fetch(getCommentsURL);
  const comments = await response.json();
  console.log(
    comments.map((comment) => {
      console.log(comment);
    })
  );
}

getComments();

//Promise based version

fetch(getCommentsURL)
  .then((response) => response.json())
  .then((comments) => {
    console.log(comments);
  });

//Delete using async

async function deletePost(id) {
  const deleteURL = `https://jsonplaceholder.typicode.com/posts/${id}`;
  const response = await fetch(deleteURL, {
    method: "DELETE",
  });
  console.log(response.ok);
}

deletePost(1);

//Delete using promise

function deletePostPromise(id) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  }).then((response) => console.log(response.ok));
}

deletePostPromise(2);

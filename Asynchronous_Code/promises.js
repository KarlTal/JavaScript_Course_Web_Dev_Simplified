/*
//Promise => promising to do something, succeed or fail

//Takes 2 parameters, resolve and reject
const promise = new Promise((resolve, reject) => {
  const sum = 1 + 2;
  if (sum === 2) {
    resolve("Success"); //Function telling you got a true or false can only return one parameter
  } else {
    reject("Erorr");
  }
});

//.then(message) === resolve("Success") where message = Success
//Calling function then on promise and is the result of running resolve
promise
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.error(message);
  }); //If no catch all errors will be uncaught
*/

//Create a promise that wraps a normal callback piece of code

/*
const promise = setTimeOutPromise(1000)

promise.then(() => {
    console.log("here");
  });

*/

setTimeOutPromise(500)
  .then(() => {
    console.log("1");

    //Combining multiple setTimeOuts
    //Chain promises together
    //Return a new promise and chain .then()
    return setTimeOutPromise(250);
  })
  .then(() => {
    console.log("2");
    return setTimeOutPromise(250);
  })
  .then(() => {
    console.log("3");
  });

function setTimeOutPromise(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration); //resolve called when duration is met
  });
}

//Exercise
//Create a promise version of addEventListener

const button = document.querySelector("button");

function addEventListenerPromise(element, method) {
  return new Promise((resolve, reject) => {
    element.addEventListener(method, resolve);
  });
}

addEventListenerPromise(button, "click").then((e) => {
  console.log("pressed on button");
  console.log(e);
});

//Fancy methods
Promise.all([
  //change to any => first one to execute will be returned
  //change to race => obtain first promise whether it fails or succeeds
  //change to allSettled => Waits for every promises to finish -> .then() will return objects of all promises with reason, status, value if fulfilled
  //Run multiple promises -> takes array of promises
  Promise.resolve("1"),
  Promise.reject("Error on 2"), //Failed
  Promise.resolve("3"),
])
  .then((messages) => {
    //Only calls .then() if every promise passes
    //Messages array is the return value of all the promises in order
    console.log(messages);
  })
  .catch((error) => {
    console.log(error);
  });

const promise1 = Promise.resolve("here");

promise1
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("finally");
  }); //Always call finally

//Promise on eventListener on hover

const button1 = document.querySelector("button");

function mouseoverEventListenerPromise(element, method) {
  return new Promise((resolve, reject) => {
    element.addEventListener(method, resolve);
  });
}

mouseoverEventListenerPromise(button1, "mouseover").then(() => {
  button1.style.backgroundColor = "red";
});

mouseoverEventListenerPromise(button1, "mouseout").then(() => {
  button1.style.backgroundColor = "white";
});

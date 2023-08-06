function setTimeoutPromise(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve(`You waited ${delay} milliseconds`);
      reject("Error!");
    }, delay);
  });
}

// setTimeoutPromise(250)
//   .then((messsage) => {
//     console.log(messsage);

//     return setTimeoutPromise(300);
//   })
//   .then((messsage) => {
//     console.log(messsage);
//   })
//   .catch((e) => {
//     console.error(e);
//   });

//Async await
//Need to be inside the function
async function doStuff() {
  try {
    console.log("before error");
    //resolve is the return value
    const message = await setTimeoutPromise(1000); //Wait until the promise resolves
    console.log("after error");
    console.log(message);
    const message2 = await setTimeoutPromise(250);
    console.log(message2);
  } catch (error) {
    console.log("here");
    console.error(error);
  }
}

// doStuff();

//Exercise

function getValueWithDelay(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

function getValueWithDelayError(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error");
    }, delay);
  });
}

//Call getValueWithDelay twice and print out returned value
async function exerciseOne() {
  try {
    const valueOne = await getValueWithDelay("Hello There!", 500);
    console.log(valueOne);
    const valueTwo = await getValueWithDelay("Goodbye!", 1000);
    console.log(valueTwo);
    await getValueWithDelayError("Aw shucks", 2000);
    //Then call getValueWithDelayError and make sure error is properly caught
  } catch (error) {
    console.error(error);
  } finally {
    console.log("finally");
  }
  //Finally keyword
}

exerciseOne();

async function doStuff2() {
  for (let i = 0; i < 10; i++) {
    // const value = await getValueWithDelay(i); => Promises better
    const value = getValueWithDelay(i).then((value) => {
      console.log(value);
    });
    // console.log(value);
  }
}

getValueWithDelay("Karl", 1000).then((message) => {
  console.log(message);
});
getValueWithDelay("Earl", 1000).then((message) => {
  console.log(message);
});
getValueWithDelay("Faye", 1000).then((message) => {
  console.log(message);
});

doStuff2();

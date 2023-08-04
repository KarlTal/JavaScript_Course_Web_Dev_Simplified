const startTime = new Date();

logWithTime("Start HTML Parse");

window.addEventListener("load", () => {
  logWithTime("Document Rendered");
}); //When everything is parsed

function logWithTime(message) {
  console.log(new Date() - startTime + "ms - " + message);
}

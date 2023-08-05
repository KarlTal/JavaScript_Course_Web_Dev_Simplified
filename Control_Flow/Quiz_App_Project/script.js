/*
  TODO: 2. Select all elements needed
    * The form element (has the id `quiz-form`)
    * The answer inputs (have the class `answer`)
    * BONUS: The questions (have the class `question-item`)
    * BONUS: The alert (has the id `alert`)
*/

const formElement = document.querySelector("#quiz-form");
const answerInputs = document.querySelectorAll(".answer");
const questions = document.querySelectorAll(".question-item");
const alert = document.querySelector("#alert");

// TODO: 3. Create a submit event listener for the form that does the following.

formElement.addEventListener("submit", (e) => {
  //    1. Prevent the default behaviour
  e.preventDefault();

  let selectedAnswers = [];
  answerInputs.forEach((answer) => {
    //    6. BONUS: Make sure unanswered questions show up as incorrect. The easiest way to do this is to add the incorrect class and removing the correct class from all question items before checking the correct answers
    let parent = answer.closest(".question-item");
    parent.classList.add("incorrect");
    parent.classList.remove("correct");
    if (answer.checked) {
      //    2. Get all selected answers (use the `checked` property on the input to determine if it is selected or not)
      selectedAnswers.push(answer);
    }
  });

  let numberOfCorrectAnswers = 0;

  //    3. Loop through the selected answer to see if they are correct or not (Check the value of the answer to see if it is the string "true")
  selectedAnswers.forEach((answer) => {
    let parent = answer.closest(".question-item");
    if (answer.value == "true") {
      //    4. For each correct answer add the class `correct` to the parent with the class `question-item` and remove the class `incorrect`.
      numberOfCorrectAnswers = numberOfCorrectAnswers + 1;
      parent.classList.add("correct");
      parent.classList.remove("incorrect");
    } else {
      //    5. For each incorrect answer add the class `incorrect` to the parent with the class `question-item` and remove the class `correct`.
      parent.classList.add("incorrect");
      parent.classList.remove("correct");
    }
  });

  //    7. BONUS: If all answers are correct show the element with the id `alert` and hide it after one second (look into setTimeout) (use the class active to show the alert and remove the class to hide it)

  if (numberOfCorrectAnswers === questions.length) {
    alert.classList.add("active");
    function removeAlert() {
      alert.classList.remove("active");
    }
    setTimeout(removeAlert, 1000);
  }
});

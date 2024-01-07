"use strict";
import question1 from "./data.js";

let QuestionCounter = 1;

function answervalue() {
  const buttons = document.querySelectorAll(".awnserDisplay");

  if (document.getElementById("QuestionCounterDiv") === null) {
    const QuestionCounterDiv = document.createElement("h2");
    QuestionCounterDiv.setAttribute("id", "QuestionCounterDiv");
    QuestionCounterDiv.style.display = "flex";
    document.body.append(QuestionCounterDiv);
  }

  buttons.forEach((el) => {
    el.addEventListener("click", (event) => {
      event.preventDefault();

      const correctAnswerArray = [];
      const wrongAnswerArray = [];

      question1.forEach((question) => {
        question.answers.forEach((answer) => {
          if (answer.isCorrect) {
            correctAnswerArray.push(answer.text.toString());
          } else {
            wrongAnswerArray.push(answer.text.toString());
          }
        });
      });

      if (correctAnswerArray.includes(el.innerText)) {
        el.style.backgroundColor = "green";
        const elementP = document.createElement("div");
        elementP.innerText = document.getElementById("QuestionCounterDiv").childElementCount+1;;
        elementP.style.color = "green";
        QuestionCounterDiv.append(elementP);
        document.dispatchEvent(new Event("answerSelected"));
      } else if (wrongAnswerArray.includes(el.innerText)) {
        el.style.backgroundColor = "red";
        const elementP = document.createElement("div");
        elementP.innerText = document.getElementById("QuestionCounterDiv").childElementCount+1;;
        elementP.style.color = "red";
        QuestionCounterDiv.append(elementP);
        document.dispatchEvent(new Event("answerSelected"));
      }
    });
  });
}

export { answervalue };

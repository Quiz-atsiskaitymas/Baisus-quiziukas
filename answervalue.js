"use strict";
import question1 from "./data.js";
// import { nextQuestion } from "./script.js";

let QuestionCounter = 1;


function answervalue() {
  const correctAnswerArray = [];
  const wrongAnswerArray = [];

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
    //po paskutinio klausimo
    // ending after questions
    if(document.getElementById("QuestionCounterDiv").childElementCount===20){//<-------pakeisti kiek klausimu reikia atsakyti
      const bodyEl = document.querySelector('body')
      const allDiv = document.querySelectorAll('body>div')
      allDiv.forEach((el)=>(el.remove()))
      const allh2 = document.getElementById('questionDisplay')
      allh2.remove()
      const allButton = document.querySelectorAll('body>button')
      allButton.forEach((el)=>(el.remove()))
      const congrat = document.createElement('h1')
      congrat.innerText="congratulation"
      bodyEl.append(congrat)
    }
      

}

export { answervalue };

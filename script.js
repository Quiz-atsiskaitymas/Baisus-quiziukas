"use strict";
localStorage.clear();
import { questionDisplay } from "./randomQuestion.js";
import { fiftyfiftychance } from "./fiftychance.js";
import { startTimer, resetTimer } from "./timer.js";

function displayResults() {
  const existingResultDisplay = document.getElementById("resultDisplay");
  if (existingResultDisplay) {
    existingResultDisplay.remove();
  }

  const questionAnswers =
    JSON.parse(localStorage.getItem("questionAnswers")) || [];
  const totalQuestions = questionAnswers.length;
  const correctAnswers = questionAnswers.filter(
    (answer) => answer.isCorrect
  ).length;
  const percentage = (correctAnswers / totalQuestions) * 100;

  const resultDisplay = document.createElement("div");
  resultDisplay.setAttribute("id", "resultDisplay");
  resultDisplay.innerHTML = `<p>Teisingi atsakymai: ${correctAnswers}</p>
                             <p>Procentai: ${percentage.toFixed(2)}%</p>`;

  if (percentage >= 70) {
    resultDisplay.innerHTML += "<p>Islaikyta</p>";
  } else {
    resultDisplay.innerHTML += "<p>Neislaikyta</p>";
  }

  document.body.appendChild(resultDisplay);

  const restartButton = document.createElement("button");
  restartButton.innerText = "Restart Quiz";
  restartButton.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
  });
}

function nextQuestion() {
  resetTimer();
  questionDisplay();
}

function init() {
  questionDisplay();
  startTimer(30, nextQuestion);
  fiftyfiftychance();
}

init();

export { nextQuestion };
export { displayResults };

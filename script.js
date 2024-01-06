"use strict";
localStorage.clear();
import { questionDisplay } from "./randomQuestion.js";
import { fiftyfiftychance } from "./fiftychance.js";
import { startTimer, resetTimer } from "./timer.js";

function nextQuestion() {
  resetTimer(); // Reset the timer when moving to the next question
  questionDisplay();
}

function init() {
  questionDisplay();
  startTimer(30, nextQuestion);
  fiftyfiftychance();
}

init();

// Add this code to reset the timer when an answer is selected
document.addEventListener("answerSelected", function () {
  resetTimer();
});

export { nextQuestion };
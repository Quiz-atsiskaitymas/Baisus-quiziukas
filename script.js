"use strict";
localStorage.clear();
import { questionDisplay } from "./randomQuestion.js";
import { fiftyfiftychance } from "./fiftychance.js";
import { startTimer, resetTimer } from "./timer.js";

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


document.addEventListener("answerSelected", function () {
  resetTimer();
});

export { nextQuestion };
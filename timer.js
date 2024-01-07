import { nextQuestion } from "./script.js";

let timer;

function startTimer(seconds, callback) {
  let timeLeft = seconds;
  timer = setInterval(() => {
    document.getElementById('timerDisplay').innerText = `Time left: ${timeLeft}s`;

    if (timeLeft === 0) {
      document.getElementById("questionDisplay").remove()
      clearInterval(timer);
      document.getElementById('timerDisplay').innerText = '';
      callback();
    }

    timeLeft--;
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  startTimer(30, nextQuestion);
}

export { startTimer, resetTimer };







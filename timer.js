// timer.js
import { nextQuestion } from "./script.js";

let timer;

function startTimer(seconds, callback) {
  let timeLeft = seconds;
  timer = setInterval(() => {
    document.getElementById('timerDisplay').innerText = `Time left: ${timeLeft}s`;

    if (timeLeft === 0) {
      clearInterval(timer);
      document.getElementById('timerDisplay').innerText = ''; // Clear timer display
      callback();
    }

    timeLeft--;
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  startTimer(30, nextQuestion); // Restart the timer with the full duration of 30 seconds
}

export { startTimer, resetTimer };







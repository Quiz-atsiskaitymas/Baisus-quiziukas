import { nextQuestion } from "./script.js";

let timer;

function startTimer(seconds, callback) {
  let timeLeft = seconds;
  timer = setInterval(() => {
    document.getElementById('timerDisplay').innerText = `Time left: ${timeLeft}s`;

    if (timeLeft === 0) {
      const questionAnswers = JSON.parse(localStorage.getItem("questionAnswers"))
      const data = questionAnswers === null ? [] : questionAnswers
      let awnser ={
        question: document.getElementById("questionDisplay").innerText,
        awnser: "baigesi laikas",
        isCorrect: false
      }
      data.push(awnser)
      localStorage.setItem("questionAnswers",JSON.stringify(data))
      const elementP = document.createElement('div');
      elementP.innerText = document.getElementById("QuestionCounterDiv").childElementCount+1;
      elementP.style.color = "red";
      document.getElementById("QuestionCounterDiv").append(elementP);
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







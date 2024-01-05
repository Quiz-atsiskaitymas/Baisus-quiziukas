"use strict";
import question1 from "./data.js";
function randomNumberArray() {
  //Sugeneruaja random array nuo 0-19
  let questionLenght = question1.length;
  let questionNumbers = [];
  let randomNumberList = [];
  for (let i = 0; i < questionLenght; i++) {
    questionNumbers.push(i);
  }
  while (questionLenght--) {
    let j = Math.floor(Math.random() * (questionLenght + 1));
    randomNumberList.push(questionNumbers[j]);
    questionNumbers.splice(j, 1);
  }
  return randomNumberList;
}
function questionDisplay() {
  let randomNumberList = randomNumberArray();
  const questionDisplay = document.createElement("h2");
  questionDisplay.setAttribute("id", "questionDisplay");
  let randomQuestion = 0;
  document.body.appendChild(questionDisplay);

  function displayNextQuestion() {
    const answerButtons = document.querySelectorAll(".awnserDisplay");
    answerButtons.forEach((el) => el.remove());
    let currentQuestion = randomNumberList[randomQuestion];
    questionDisplay.innerText = question1[currentQuestion].question;
    for (let i = 0; i < question1[currentQuestion].answers.length; i++) {
      const answerDisplay = document.createElement("button");
      answerDisplay.setAttribute("class", "awnserDisplay");
      answerDisplay.innerText = question1[currentQuestion].answers[i].text;
      document.body.append(answerDisplay);
      answerDisplay.addEventListener("click", (event) => {
        const questionAnswers =
          JSON.parse(localStorage.getItem("questionAnswers")) || [];
        let answer = {
          question: question1[currentQuestion].question,
          answer: question1[currentQuestion].answers[i].text,
          isCorrect: question1[currentQuestion].answers[i].isCorrect,
        };
        questionAnswers.push(answer);
        localStorage.setItem(
          "questionAnswers",
          JSON.stringify(questionAnswers)
        );
        randomQuestion++;
        if (randomQuestion < randomNumberList.length) {
          displayNextQuestion();
        } else {
          console.log("Visi klausimai atsakyti");
        }
      });
    }
  }

  displayNextQuestion();
}

export { questionDisplay };

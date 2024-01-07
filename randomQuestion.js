"use strict";
import question1 from "./data.js";
import { answervalue } from "./answervalue.js";

function randomNumberArray() {
  // Generate a random array from 0 to 19
  let questionLength = question1.length;
  let questionNumbers = [];
  let randomNumberList = [];
  for (let i = 0; i < questionLength; i++) {
    questionNumbers.push(i);
  }
  while (questionLength--) {
    let j = Math.floor(Math.random() * (questionLength + 1));
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

    if (randomQuestion < randomNumberList.length) {
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

          // Add a delay of 2 seconds before showing the next question
          setTimeout(() => {
            randomQuestion++;
            displayNextQuestion();
          }, 2000);
        });
      }
      answervalue();
    } else {
      // All questions answered, display results
      displayResults();
    }
  }

  function displayResults() {
    const questionAnswers =
      JSON.parse(localStorage.getItem("questionAnswers")) || [];
    const totalQuestions = question1.length;
    const correctAnswers = questionAnswers.filter(
      (answer) => answer.isCorrect
    ).length;
    const percentage = (correctAnswers / totalQuestions) * 100;

    // Display the results
    const resultDisplay = document.createElement("div");
    resultDisplay.setAttribute("id", "resultDisplay");
    resultDisplay.innerHTML = `<p>Teisingi atsakymai: ${correctAnswers}</p>
                               <p>Viso klausimu: ${totalQuestions}</p>
                               <p>Rezultatas procentais: ${percentage.toFixed(
                                 2
                               )}%</p>`;
    document.body.appendChild(resultDisplay);
  }

  displayNextQuestion();
}

export { questionDisplay };

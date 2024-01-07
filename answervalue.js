// "use strict"
// import question1 from "./data.js";

// let QuestionCounter=1
// function answervalue(){
//     const correctAnswerArray = []
//     const wrongAnswerArray = []
//     const buttons = document.querySelectorAll('.awnserDisplay')
//         question1.forEach(el => {
//             el.answers.forEach((ele)=>{
//                 if(ele.isCorrect===true){
//                     if(isNaN(ele.text)){correctAnswerArray.push(ele.text)}// from number to string
//                     else{ele.text+="";correctAnswerArray.push(ele.text)}
//                 }
//                 if(isNaN(ele.text)){wrongAnswerArray.push(ele.text)}
//                 else{ele.text+="";wrongAnswerArray.push(ele.text)}
//             })
//         })
//     if(document.getElementById('QuestionCounterDiv')===null){
//     const QuestionCounterDiv = document.createElement('h2')
//     QuestionCounterDiv.setAttribute('id', 'QuestionCounterDiv')
//     QuestionCounterDiv.style.display="flex"
//     document.body.append(QuestionCounterDiv)
//     }
//     buttons.forEach(el=>{
//         //testavimui geri atsakymai ir ne!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//         if(correctAnswerArray.includes(el.innerText)){el.style.backgroundColor="green"}
//         else if(wrongAnswerArray.includes(el.innerText)){el.style.backgroundColor="red"}

//         el.addEventListener("click", (event)=>{
//             event.preventDefault()

//             if(correctAnswerArray.includes(el.innerText)){
//                 alert('Right')
//                 const elementP= document.createElement('div')
//                 elementP.innerText=QuestionCounter++
//                 elementP.style.color="green"
//                 QuestionCounterDiv.append(elementP)

//             }
//             else if(wrongAnswerArray.includes(el.innerText)){
//                 alert('Wrong')
//                 const elementP= document.createElement('div')
//                 elementP.innerText=QuestionCounter++
//                 elementP.style.color="red"
//                 QuestionCounterDiv.append(elementP)
//             }
//         })
//         })

//     // if(correctAnswerArray===)
// }

// export{answervalue}

"use strict";
import question1 from "./data.js";
// import { nextQuestion } from "./script.js";

let QuestionCounter = 1;


function answervalue() {
  const correctAnswerArray = [];
  const wrongAnswerArray = [];

  //ending after 10 questions
    if(QuestionCounter===11){
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
            correctAnswerArray.push(answer.text);
          } else {
            wrongAnswerArray.push(answer.text);
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
  

}

export { answervalue };

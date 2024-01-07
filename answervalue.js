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

let QuestionCounter = 1;

function answervalue() {
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

      const correctAnswerArray = [];
      const wrongAnswerArray = [];

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
        elementP.innerText = QuestionCounter++;
        elementP.style.color = "green";
        QuestionCounterDiv.append(elementP);
        document.dispatchEvent(new Event("answerSelected"));
      } else if (wrongAnswerArray.includes(el.innerText)) {
        el.style.backgroundColor = "red";
        const elementP = document.createElement("div");
        elementP.innerText = QuestionCounter++;
        elementP.style.color = "red";
        QuestionCounterDiv.append(elementP);
        document.dispatchEvent(new Event("answerSelected"));
      }
    });
  });
}

export { answervalue };

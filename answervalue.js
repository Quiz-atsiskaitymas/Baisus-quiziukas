"use strict"
import question1 from "./data.js";

let QuestionCounter=1
function answervalue(){
    const correctAnswerArray = []
    const wrongAnswerArray = []
    const buttons = document.querySelectorAll('.awnserDisplay')
        question1.forEach(el => {
            el.answers.forEach((ele)=>{
                if(ele.isCorrect===true){
                    correctAnswerArray.push(ele.text)}
                else{wrongAnswerArray.push(ele.text)}
            })
        })
    console.log(correctAnswerArray);
    console.log(wrongAnswerArray);
    if(document.getElementById('QuestionCounterDiv')===null){
    const QuestionCounterDiv = document.createElement('h2')
    QuestionCounterDiv.setAttribute('id', 'QuestionCounterDiv')
    document.body.append(QuestionCounterDiv)
    }
    buttons.forEach(el=>{
        //testavimui geri atsakymai ir ne
        if(correctAnswerArray.toString().includes(el.innerText)){el.style.backgroundColor="green"}
        else if(wrongAnswerArray.toString().includes(el.innerText)){el.style.backgroundColor="red"}
        console.log(el.innerText);
        
        el.addEventListener("click", (event)=>{
            event.preventDefault()
            
            if(correctAnswerArray.includes(el.innerText)){
                alert('Right')
                const elementP= document.createElement('p')
                elementP.innerText=QuestionCounter++
                elementP.style.color="green"
                QuestionCounterDiv.append(elementP)

            }
            else if(wrongAnswerArray.includes(el.innerText)){
                alert('Wrong')
                const elementP= document.createElement('p')
                elementP.innerText=QuestionCounter++
                elementP.style.color="red"
                QuestionCounterDiv.append(elementP)
            }
        })
        })
        
        
    // if(correctAnswerArray===)
}


export{answervalue}
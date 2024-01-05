"use strict";
import question1 from "./data.js";
import { questionDisplay } from "./randomQuestion.js";
import { answervalue } from "./answervalue.js";

function fiftyfiftychance(){
    const fiftyButton = document.createElement('button')
    fiftyButton.setAttribute('id', 'fiftychance')
    fiftyButton.innerText="50/50"
    document.body.append(fiftyButton)

    fiftyButton.addEventListener('click', (el)=>{
        el.preventDefault()
        const curentQuestion=document.getElementById('questionDisplay').innerText
        const buttons = document.querySelectorAll('button')
   

    const wrongAnswerArray = []
    let CorrectAnswer = null
        question1.forEach(el => {
            if(el.question.replace(/[^a-zA-Z]/g, "")===curentQuestion.replace(/[^a-zA-Z]/g, "")){   //replace, panaikina nereikalingus zenklus pries lygininat
                el.answers.forEach(element=>{
                    if(element.isCorrect===false){
                        buttons.forEach((el)=>{
                            if(el.innerText==element.text){
                                wrongAnswerArray.push(element.text) 
                                el.remove()    //istrina visus neteisngus atsakymus 
                            }
                        })
                    }else if(element.isCorrect===true){
                        buttons.forEach((el)=>{if(el.innerText==element.text){CorrectAnswer=el.innerText; el.remove()}})
                    }
                        
                })
            }
                
        });
        const answerbutton1 = document.createElement('button')
        answerbutton1.setAttribute('id', 'answer')
        answerbutton1.setAttribute('class', 'awnserDisplay')
        answerbutton1.innerText=CorrectAnswer
        //prideda viena random netesinga atsakyma kad butu 50/50
        const randomWrongAnswer= Math.floor(Math.random() * wrongAnswerArray.length);
        const answerbutton = document.createElement('button')
        answerbutton.setAttribute('id', 'answer')
        answerbutton.setAttribute('class', 'awnserDisplay')
        answerbutton.innerText=wrongAnswerArray[randomWrongAnswer]
        document.body.append(answerbutton)
        document.body.append(answerbutton1)
        const answerButtons = document.querySelectorAll('.awnserDisplay')
        let answerIdNumber=0
        answerButtons.forEach((el)=>{
            el.setAttribute('id', `answer${answerIdNumber++}`)
        })
        
        document.getElementById('fiftychance').remove() // panaikina mygtuka po panaudojimo
        answerButtons.forEach((el)=>{
            el.addEventListener("click",(event)=>{
                const questionAnswers = JSON.parse(localStorage.getItem("questionAnswers"))
                const data = questionAnswers === null ? [] : questionAnswers
                let awnser ={
                    question: document.getElementById("questionDisplay").innerText,
                    awnser: answerbutton.innerText,
                    isCorrect: false
                }
                data.push(awnser)
                localStorage.setItem("questionAnswers",JSON.stringify(data))
                document.getElementById("questionDisplay").remove()
                questionDisplay()
        })})
        answervalue()
    })
    
}
// console.log(question1);


export{fiftyfiftychance}
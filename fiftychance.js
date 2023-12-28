"use strict";
import question1 from "./data.js";


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
                    }
                        
                })
            }
                
        });
        //prideda viena random netesinga atsakyma kad butu 50/50
        const randomWrongAnswer= Math.floor(Math.random() * wrongAnswerArray.length);
        const answerbutton = document.createElement('button')
        answerbutton.setAttribute('id', 'answer')
        answerbutton.setAttribute('class', 'awnserDisplay')
        answerbutton.innerText=wrongAnswerArray[randomWrongAnswer]
        document.body.append(answerbutton)
        const answerButtons = document.querySelectorAll('.awnserDisplay')
        let answerIdNumber=0
        answerButtons.forEach((el)=>{
            el.setAttribute('id', `answer${answerIdNumber++}`)
        })
        document.getElementById('fiftychance').remove() // panaikina mygtuka po panaudojimo
        answerbutton.addEventListener("click",(event)=>{
            const questionAwnsers = JSON.parse(localStorage.getItem("questionAwnsers"))
            const data = questionAwnsers === null ? [] : questionAwnsers
            let awnser ={
                question: document.getElementById("questionDisplay").innerText,
                awnser: answerbutton.innerText,
                isCorrect: false
            }
            data.push(awnser)
            localStorage.setItem("questionAwnsers",JSON.stringify(data))
        })
        
    })
    
}
// console.log(question1);


export{fiftyfiftychance}
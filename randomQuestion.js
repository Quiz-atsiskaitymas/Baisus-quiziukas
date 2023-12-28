"use strict";
import question1 from "./data.js";
function randomNumberArray(){ //Sugeneruaja random array nuo 0-19
    let questionLenght = question1.length
    let questionNumbers = []
    let randomNumberList = []
    for (let i=0;i<questionLenght;i++){
        questionNumbers.push(i)
    }
    while(questionLenght--){
        let j = Math.floor(Math.random()*(questionLenght+1))
        randomNumberList.push(questionNumbers[j])
        questionNumbers.splice(j,1)
    }
    return randomNumberList
}
function questionDisplay(){
    localStorage.clear()
    let randomNumberList = randomNumberArray()
    const buttonNext = document.createElement("button")//
    buttonNext.innerText="next"                        // del testavimo
    document.body.append(buttonNext)                   //
    const questionDisplay = document.createElement("h2")
    questionDisplay.setAttribute("id","questionDisplay")
    let randomQuestion = 0
    document.body.appendChild(questionDisplay)
    buttonNext.addEventListener("click",(event)=>{     //pasalina ir sukuria mygtukus kiekvienam klausimo atsakymui (nes kaikurie klausimai turi 5 atsakymus)
        const awnserDisplayRemove = document.querySelectorAll(".awnserDisplay")
        awnserDisplayRemove.forEach((el)=>{
            el.remove()
        })
        let curentQuestion = randomNumberList[randomQuestion]
        questionDisplay.innerText=question1[curentQuestion].question
        for(let i=0;i<question1[curentQuestion].answers.length;i++){
            const awnserDisplay = document.createElement("button")
            awnserDisplay.setAttribute("id",`awnser${i}`)
            awnserDisplay.setAttribute("class","awnserDisplay")
            awnserDisplay.innerText=question1[curentQuestion].answers[i].text
            document.body.append(awnserDisplay)
            awnserDisplay.addEventListener("click",(event)=>{
                const questionAwnsers = JSON.parse(localStorage.getItem("questionAwnsers"))
                const data = questionAwnsers === null ? [] : questionAwnsers
                let awnser ={
                    question: question1[curentQuestion].question,
                    awnser: question1[curentQuestion].answers[i].text,
                    isCorrect: question1[curentQuestion].answers[i].isCorrect
                }
                data.push(awnser)
                localStorage.setItem("questionAwnsers",JSON.stringify(data))
            })
        }
        randomQuestion++
    })
}
export {questionDisplay}
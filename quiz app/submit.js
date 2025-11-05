const score = document.querySelector(".score");
const selectedAnswers = localStorage.getItem("selectedAnswers");
let calculatedScore = 0;
async function loadQuestions(){
    const res = await fetch("questions.json");
    const data = await res.json();
    return data;
}

async function calculateScore() {
    const questions = await loadQuestions();
    // console.log(questions[0]);
    for(let i=0;i<25;i++){
        if(selectedAnswers[i] === questions[i].answer)
            calculatedScore+=1;
    }
    score.textContent = calculatedScore;
}

calculateScore();


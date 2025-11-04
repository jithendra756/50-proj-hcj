//declarations and initializations
const tracking = document.querySelector(".tracking");
const optionRows = document.querySelectorAll(".o1");
const qno = document.querySelector(".qno");
const ques = document.querySelector(".ques");
const option = document.querySelectorAll(".option");
const prevbtn = document.querySelector(".prev");
const nextbtn = document.querySelector(".next");

const numberOfQuestions = 25;

//set up of tracking division
for(let i=1;i<=numberOfQuestions;i++){
    const p = document.createElement("p");
    p.textContent = i;
    tracking.appendChild(p);
}

//hovering options
optionRows.forEach(row=>{
    const optionIdentifier = row.querySelector(".on");
    const optionContent = row.querySelector(".option");

    const me = ()=>{
        optionIdentifier.style.transform="scale(1.1)";
        optionIdentifier.style.transition = "transform 0.2s ease";
        optionIdentifier.style.backgroundColor = "#f98092"
        optionContent.style.transform = "scale(1.04)";
        optionContent.style.border = "2px solid rgb(51, 2, 100)";
        optionContent.style.transition = "transform 0.2s ease";
    }

    const ml = ()=>{
        optionIdentifier.style.transform = "scale(1)";
        optionIdentifier.style.backgroundColor = "#fca0ae"
        optionContent.style.transform = "scale(1)";
        optionContent.style.border = "1px solid rgb(51, 2, 100)";
    }

    optionContent.addEventListener("mouseenter", me);
    optionContent.addEventListener("mouseleave",ml);
    optionIdentifier.addEventListener("mouseenter",me);
    optionIdentifier.addEventListener("mouseleave",ml);    
});

//load questions from api or static json
async function loadQuestions() {
    const res = await fetch("questions.json");
    const data = await res.json();
    return data;
}

//main function
async function startQuiz() {
    let quesnumber = 1;
    prevbtn.style.opacity=0.2;

    //initialize data
    const questions=  await loadQuestions();

    //setup question number
    const questionNumber = document.createElement("h3");
    questionNumber.textContent=quesnumber;
    qno.appendChild(questionNumber);
    
    //setup question
    const question = document.createElement("p");
    question.textContent = questions[quesnumber-1].question;
    ques.appendChild(question);

    //setup options for current question
    for(let i=0;i<4;i++){
        const p = document.createElement("p");
        p.textContent = questions[quesnumber-1].options[i];
        option[i].appendChild(p);
    }

    //make question number active in tracking division
    const makePActive=()=>{
        const p = tracking.querySelectorAll("p")[quesnumber-1];
        document.querySelectorAll(".tracking p").forEach(el => el.classList.remove("active"));
        p.classList.add("active");
    }

    makePActive();

    //set question
    const setQuestion = ()=>{
        questionNumber.textContent = quesnumber;
        question.textContent = questions[quesnumber-1].question;
        for(let i=0;i<4;i++){
            const p = option[i].querySelector("p");
            p.textContent = questions[quesnumber-1].options[i];
        }
        if(quesnumber!=1)
            prevbtn.style.opacity=1;
        if(quesnumber!=25)
            nextbtn.style.opacity=1;
    };

    //next button functions
    nextbtn.addEventListener("click",()=>{
        prevbtn.style.opacity = 1;
        quesnumber+=1;
        if(quesnumber>=26)
        {
            quesnumber=25;
            return;
        }
        else{
            if(quesnumber==25)
                nextbtn.style.opacity = 0.2;
            setQuestion();
            makePActive();
        }
    });

    //previous button functions
    prevbtn.addEventListener("click", ()=>{
        nextbtn.style.opacity=1;
        quesnumber-=1;
        if(quesnumber<1){
            quesnumber=1;
            return;
        }else{
            if(quesnumber==1)
                prevbtn.style.opacity=0.2;
            setQuestion();
            makePActive();
        }
    });

    //set up question based on tracking division
    for(let i=0;i<numberOfQuestions;i++){
        const p = tracking.querySelectorAll("p")[i];
        p.addEventListener("click", ()=>{
            quesnumber=parseInt(p.textContent);
            setQuestion();
            makePActive();
            if(quesnumber==1)
                prevbtn.style.opacity=0.2;
            if(quesnumber==25)
                nextbtn.style.opacity=0.2;
        });
    }


}

startQuiz();





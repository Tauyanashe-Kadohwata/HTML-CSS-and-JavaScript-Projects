const questions = [
    {
        question: "What is the world's most populated country?",
        answers: [
            {text: "India", correct: true},
            {text: "China", correct: false},
            {text: "USA", correct: false},
            {text: "Russia", correct: false},
        ]
    },
    {
        question: "Which country has the strongest economy?",
        answers: [
            {text: "Germany", correct: false},
            {text: "China", correct: false},
            {text: "USA", correct: true},
            {text: "Russia", correct: false},
        ]
    },
    {
        question: "What is the world's poorest country?",
        answers: [
            {text: "Yemen", correct: false},
            {text: "Libya", correct: false},
            {text: "Myanmar", correct: false},
            {text: "South Sudan", correct: true},
        ]
    },
    {
        question: "What is the world's happiest country?",
        answers: [
            {text: "The Netherlands", correct: false},
            {text: "Finland", correct: true},
            {text: "Spain", correct: false},
            {text: "Denmark", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
       handleNextButton();
    }else{
        startQuiz();
    }
});

function showScore(){
    resetState();
    questionElement.innerHTML = ` You scored ${score} out of ${questions.length}!`  ;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


startQuiz();
const question = window.document.getElementById('question');
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const loader = document.getElementById('loader');
const game = document.getElementById('game');

let currentQuestion = {};
let acceptingAnswer = {};
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [];

fetch ("https://opentdb.com/api.php?amount=10&type=multiple")
    .then(res => {
        console.log(res);
        return res.json();
    })
    .then( loadedQuestions => {
    console.log(loadedQuestions.results);
    questions = loadedQuestions.results.map( loadedQuestions => {
        const formattedQuestion = {
            question: loadedQuestions.question
        };

        const answerChoices = [...loadedQuestions.incorrect_answers];

        formattedQuestion.answer = Math.floor(Math.random()*3) +1;
        answerChoices.splice(formattedQuestion.answer -1,0,loadedQuestions.correct_answer);

        answerChoices.forEach((choice, index) => {
            formattedQuestion["choice" + (index+1)] = choice;
        })

        return formattedQuestion;
    });
    game.classList.remove("hidden");
    loader.classList.add("hidden");
    startGame();
})
.catch( err => {
    console.error(err);
});

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];

    getNewQuestion();
};

getNewQuestion = () => {
    
    if(availableQuestions.length == 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        //go to the end page
        return window.location.assign("/end.html");
    }
    questionCounter++;
    progressText.innerText = "Question: " + questionCounter + "/" + MAX_QUESTIONS;
    //update progress bar
    progressBarFull.style.width = (questionCounter/MAX_QUESTIONS) * 100 + "%";

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerHTML = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerHTML = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;
        
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if (classToApply == "correct") {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
        

        console.log(selectedAnswer, currentQuestion.answer, classToApply);
        
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}
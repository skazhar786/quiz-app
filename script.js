// const questions =  [
//     {
//         question : 'which is the largest animal in the world',
//         answer:[
//             {text: "Shark", correct: false},
//             {text: "blue whale", correct: true},
//             {text: "elephant", correct: false},
//             {text: "tiger", correct: false}
//         ]
//     },
//     {
//         question : 'which is the smallest country in the world',
//         answer: [
//             {text: "vetican city", correct: true},
//             {text: "sri lanka", correct: false},
//             {text: "butan", correct: false},
//             {text: "nepal", correct: false}
//         ]
//     },
//     {
//         question : 'which is the largest desert in the world',
//         answer: [
//             {text: "sahara", correct: false},
//             {text: "kalhari", correct: false},
//             {text: "antartica", correct: true},
//             {text: "gobi", correct: false}
//         ]
//     },
//     {
//         question : 'which is the largest continent in the world',
//         answer: [
//             {text: "asia", correct: false},
//             {text: "africa", correct: false},
//             {text: "australia", correct: true},
//             {text: "artic", correct: false}
//         ]
//     }
   
// ]

// const questionElement = document.getElementById('question')
// const answerBtn = document.getElementById('answerBtn')
// const nextBtn = document.getElementById('next_btn')

// let currentQuestionIndex = 0
// let score = 0

// function startQuiz(){
//     currentQuestionIndex = 0
//     score = 0
//     nextBtn.innerHTML = 'Next'
//     showQuestion()
// }

// function showQuestion(){
//  answerBtn.innerHTML = ""
//  nextBtn.style.display = 'none'
//     let currentQuestion = questions[currentQuestionIndex]
//     let questionNO = currentQuestionIndex + 1
//     questionElement.innerHTML = questionNO +"." + currentQuestion.question

//     currentQuestion.answer.forEach(answer => {
//         const button = document.createElement('button')
//         button.innerHTML = answer.text
//         button.classList.add('Btn')
//         answerBtn.appendChild(button)
       
//         if(answer.correct){
//             button.dataset.correct = answer.correct
//         }

//         button.addEventListener('click',selectAnswer)
//     })
// }

// function selectAnswer(e){
//      const selectedBtn = e.target
//      const isCorrect = selectedBtn.dataset.correct === "true"
//      if(isCorrect){
//         selectedBtn.classList.add('correct')
//         score++;
//      }else{
//         selectedBtn.classList.add('incorrect')
//      }

//      Array.from(answerBtn.children).forEach(button => {
//         if(button.dataset.correct === 'true'){
//             button.classList.add('correct')
//         }
//         button.disabled = 'true'
//         nextBtn.style.display = 'block'
//      })
// }

// function showScore(){
//     answerBtn.innerHTML = ""
//     questionElement.innerHTML = `Your Score is ${score} Out of ${questions.length}`
//     nextBtn.innerHTML = 'Play Again'
//     nextBtn.style.display = 'block'
// }

// function handleNextBtn(){
//     currentQuestionIndex++
//     if(currentQuestionIndex < questions.length){
//         showQuestion()
//     }else{
//         showScore()
//     }
// }

// nextBtn.addEventListener('click',function(){
//     if(currentQuestionIndex < questions.length){
//         handleNextBtn()
//     }else{
//         startQuiz()
//     }
// })

// startQuiz()


const questions = [
    {
        question: 'which is the largest animal in the world',
        answer: [
            { text: "Shark", correct: false },
            { text: "blue whale", correct: true },
            { text: "elephant", correct: false },
            { text: "tiger", correct: false }
        ]
    },
    {
        question: 'which is the smallest country in the world',
        answer: [
            { text: "vetican city", correct: true },
            { text: "sri lanka", correct: false },
            { text: "butan", correct: false },
            { text: "nepal", correct: false }
        ]
    },
    {
        question: 'which is the largest desert in the world',
        answer: [
            { text: "sahara", correct: false },
            { text: "kalhari", correct: false },
            { text: "antartica", correct: true },
            { text: "gobi", correct: false }
        ]
    },
    {
        question: 'which is the largest continent in the world',
        answer: [
            { text: "asia", correct: true },
            { text: "africa", correct: false },
            { text: "australia", correct: false },
            { text: "artic", correct: false }
        ]
    }
];

const questionElement = document.getElementById('question');
const answerBtn = document.getElementById('answerBtn');
const nextBtn = document.getElementById('next_btn');
const prevBtn = document.getElementById('prev_btn'); // New button

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = 'Next';
    prevBtn.style.display = 'none'; // Hide "Previous" button at the start
    showQuestion();
}

function showQuestion() {
    answerBtn.innerHTML = "";
    nextBtn.style.display = 'none';

    if (currentQuestionIndex > 0) {
        prevBtn.style.display = 'inline';
    } else {
        prevBtn.style.display = 'none';
    }

    let currentQuestion = questions[currentQuestionIndex];
    let questionNO = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNO + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('Btn');
        answerBtn.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener('click', selectAnswer);
    });
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('incorrect');
    }

    Array.from(answerBtn.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = 'true';
    });

    nextBtn.style.display = 'inline';
}

function showScore() {
    answerBtn.innerHTML = "";
    questionElement.innerHTML = `Your Score is ${score} Out of ${questions.length}`;
    nextBtn.innerHTML = 'Play Again';
    nextBtn.style.display = 'inline';
    prevBtn.style.display = 'none'; // Hide "Previous" button on score screen
}

function handleNextBtn() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function handlePrevBtn() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
        nextBtn.style.display = 'inline'
        prevBtn.style.display = 'inline'
    }
}

nextBtn.addEventListener('click', function () {
    if (currentQuestionIndex < questions.length) {
        handleNextBtn();
    } else {
        startQuiz();
    }
});

prevBtn.addEventListener('click', handlePrevBtn); // Add event listener for "Previous" button

startQuiz();

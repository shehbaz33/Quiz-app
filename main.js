const quizData = [
    {
        question: 'The Exercise Malabar is associated with which Armed force of India?',
        option1: 'Indian Army',
        option2: 'Indian Navy',
        option3: 'Indian Coast Guard',
        option4: 'National Security Guard',
        correct: 'b',
    },
    {
        question: 'Sunil Chhetri, who was in the news recently, is associated with which sports?',
        option1: 'Cricket',
        option2: 'Football',
        option3: 'Hockey',
        option4: 'Volleyball',
        correct: 'b',
    },
    {
        question: 'What is the proposed financial outlay for the PM Gati Shakti Master Plan?',
        option1: '100 Crore',
        option2: '1 lakh crore',
        option3: '10 lakh crore',
        option4: '100 lak crore',
        correct: 'd',
    },
    {
        question: 'TAmoria thorae, which was seen in the news recently, is a new species of?',
        option1: 'Marine Snail',
        option2: 'Turtle',
        option3: 'Spider',
        option4: 'Crab',
        correct: 'a',
    },
    {
        question: 'TWhich animal species is also called as ‘Dhole’?',
        option1: 'Widl Dog',
        option2: 'Hyena',
        option3: 'Aardwolf',
        option4: 'African Elephant',
        correct: 'a',
    },
    {
        question: 'What is the theme of the ‘World Arthritis Day 2021’?',
        option1: 'Dont Delay',
        option2: 'Leaving no one behind',
        option3: 'Misdiagnosis ',
        option4: '25 years',
        correct: 'a',
    },
]

let a_text = document.getElementById('A');
let b_text = document.getElementById('B');
let c_text = document.getElementById('C');
let d_text = document.getElementById('D');
let questions = document.getElementById('question');
let submit = document.getElementById('submit');
const answers = document.querySelectorAll('.test');

let currentQuiz = 0
let score = 0

random()

function random () {
    deSelect();
    const currentQuizData = quizData[currentQuiz];
    const {question,option1,option2,option3,option4,correct } = currentQuizData;
    questions.innerText = question;
    a_text.innerText = option1;
    b_text.innerText = option2;
    c_text.innerText = option3;
    d_text.innerText = option4;
}

function getSelected () {
    let answer = undefined
    answers.forEach((answerEl) => {
    if(answerEl.checked){
        answer = answerEl.id;
    }
    });
    return answer
}

function deSelect () {
    answers.forEach((answer) => {
        answer.checked = false;
    });
}

submit.addEventListener('click', () => {
  let answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
            console.log(score);
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            random();
        } else {
            alert(`Your score is ${score}`)
        }
    }
})






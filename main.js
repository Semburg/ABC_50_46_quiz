const quizData = [

    {
        question: 'Which language runs in a web browser?',
        a: "Java",
        b: "C++",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },

    {
        question: 'What does CSS stand for?',
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: ""
    },

    {
        question: 'What does HTML stand for?',
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminus Motros Lamborginis",
        correct: "a"
    },

    {
        question: 'What year was JavaScript launched?',
        a: "1996",
        b: "1995",
        c: "1994",
        d: "no one of above",
        correct: "b"
    },
]

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_txt = document.getElementById('d_text');

const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz() {

    deselectAnswers()


    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function deselectAnswers() {
    answerEls.forEach(el => el.checked = false)
}

function getSelected() {
    let answer;
    answerEls.forEach(el => {
        if (el.checked) {
            answer = el.id;
        }
    })
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length ) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2> You answered correctly at ${score} question of ${quizData.length} </h2>
                <button onclick = "location.reload()">Reload</button>
            `
        }
    }
})


let score = 0;

const questions = [
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "What is the capital of the Philippines?",
        choices: ["Cebu", "Davao", "Manila", "Baguio"],
        answer: "Manila"
    }
];

let currentQuestion = 0;

function loadQuestion() {
    let q = questions[currentQuestion];

    document.getElementById("question").innerText = q.question;

    let buttons = document.querySelectorAll(".choice");
    buttons.forEach((btn, i) => {
        btn.innerText = q.choices[i];
    });
}

function checkAnswer(button) {
    let selected = button.innerText;
    let correct = questions[currentQuestion].answer;

    if (selected === correct) {
        score++;
        document.getElementById("score").innerText = score;
        alert("Correct!");
    } else {
        alert("Wrong answer!");
    }
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        alert("Game Finished! Final Score: " + score);
    }
}

loadQuestion();
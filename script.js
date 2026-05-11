let correct = 0;
let wrong = 0;
let currentQuestion = 0;

const questions = [
    {
        question: "What best defines a startup?",
        choices: [
            "A large corporation",
            "A new business designed to grow fast",
            "A school project",
            "A government agency"
        ],
        answer: "A new business designed to grow fast"
    },
    {
        question: "What is an MVP in tech startups?",
        choices: [
            "Maximum Value Product",
            "Minimum Viable Product",
            "Main Verified Plan",
            "Market Volume Product"
        ],
        answer: "Minimum Viable Product"
    },
    {
        question: "What is SaaS?",
        choices: [
            "Software as a Service",
            "System as a Server",
            "Storage and Application System",
            "Secure App Solution"
        ],
        answer: "Software as a Service"
    },
    {
        question: "Which is an example of e-commerce?",
        choices: [
            "Online shopping platform",
            "School classroom",
            "Hospital system",
            "Library catalog only"
        ],
        answer: "Online shopping platform"
    },
    {
        question: "What is scalability in a startup?",
        choices: [
            "Ability to reduce size",
            "Ability to grow efficiently",
            "Ability to stop operations",
            "Ability to delete users"
        ],
        answer: "Ability to grow efficiently"
    },
    {
        question: "What is venture capital?",
        choices: [
            "Money from investors for startups",
            "Government salary",
            "Student allowance",
            "Bank savings only"
        ],
        answer: "Money from investors for startups"
    },
    {
        question: "What is a business model?",
        choices: [
            "How a business earns money",
            "Office building design",
            "Employee schedule",
            "Logo creation"
        ],
        answer: "How a business earns money"
    },
    {
        question: "What is user experience (UX)?",
        choices: [
            "How users feel when using a product",
            "Programming language",
            "Marketing budget",
            "Server speed only"
        ],
        answer: "How users feel when using a product"
    },
    {
        question: "What is a revenue stream?",
        choices: [
            "How money enters a business",
            "How employees leave",
            "Marketing design",
            "Customer complaints"
        ],
        answer: "How money enters a business"
    },
    {
        question: "What is a pivot in startup terms?",
        choices: [
            "Changing business direction",
            "Hiring employees",
            "Closing the company",
            "Buying equipment"
        ],
        answer: "Changing business direction"
    }
];

function loadQuestion() {
    let q = questions[currentQuestion];

    document.getElementById("question").innerText = q.question;

    let buttons = document.querySelectorAll(".choice");

    buttons.forEach((btn, i) => {
        btn.disabled = false;
        btn.className = "choice";
        btn.innerText = q.choices[i];
    });

    document.getElementById("feedback").innerText = "";
}

function checkAnswer(button) {
    let selected = button.innerText;
    let correctAnswer = questions[currentQuestion].answer;

    let buttons = document.querySelectorAll(".choice");

    buttons.forEach(btn => btn.disabled = true);

    let correctButton;

    buttons.forEach(btn => {
        if (btn.innerText === correctAnswer) {
            correctButton = btn;
        }
    });

    if (selected === correctAnswer) {
        correct++;
        document.getElementById("feedback").innerText = "✔ Correct";
        document.getElementById("feedback").style.color = "green";

        button.classList.add("correct");
    } else {
        wrong++;
        document.getElementById("feedback").innerText = "✘ Wrong";
        document.getElementById("feedback").style.color = "red";

        button.classList.add("wrong");
        if (correctButton) correctButton.classList.add("correct");
    }

    document.getElementById("correct").innerText = correct;
    document.getElementById("wrong").innerText = wrong;

    setTimeout(nextQuestion, 1200);
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question").innerText = "Quiz Completed!";
        document.querySelector(".choices").style.display = "none";

        document.getElementById("feedback").innerText =
            `Final Score → Correct: ${correct} | Wrong: ${wrong}`;
    }
}

function resetGame() {
    correct = 0;
    wrong = 0;
    currentQuestion = 0;

    document.querySelector(".choices").style.display = "grid";

    document.getElementById("correct").innerText = 0;
    document.getElementById("wrong").innerText = 0;

    loadQuestion();
}

loadQuestion();
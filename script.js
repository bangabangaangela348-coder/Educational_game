const questions = [
  {
    question: "What is entrepreneurship?",
    choices: [
      "Creating value",
      "Sleeping",
      "Gaming",
      "Ignoring problems"
    ],
    answer: "Creating value"
  },

  {
    question: "Which is an example of a startup?",
    choices: [
      "Canva",
      "Bakery",
      "Carinderia",
      "Sari-sari Store"
    ],
    answer: "Canva"
  },

  {
    question: "Which business is usually local?",
    choices: [
      "Startup",
      "Small Business",
      "Corporation",
      "Factory"
    ],
    answer: "Small Business"
  },

  {
    question: "What do entrepreneurs solve?",
    choices: [
      "Problems",
      "Nothing",
      "Homework",
      "Vacations"
    ],
    answer: "Problems"
  },

  {
    question: "Which is part of entrepreneurship?",
    choices: [
      "Innovation",
      "Laziness",
      "Fear",
      "Waste"
    ],
    answer: "Innovation"
  }
];

let currentQuestion = 0;
let correct = 0;
let wrong = 0;

const question = document.getElementById("question");

const optionButtons =
document.querySelectorAll(".option");

const nextBtn =
document.getElementById("nextBtn");

function loadQuestion(){

    let q = questions[currentQuestion];

    question.innerText = q.question;

    optionButtons.forEach((button,index)=>{

        button.innerText = q.choices[index];

        button.classList.remove(
            "correct",
            "wrong"
        );

        button.disabled = false;
    });
}

optionButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        checkAnswer(button);
    });
});

function checkAnswer(button){

    let answer =
    questions[currentQuestion].answer;

    optionButtons.forEach(btn=>{

        btn.disabled = true;

        if(btn.innerText === answer){

            btn.classList.add("correct");
        }
    });

    if(button.innerText === answer){

        correct++;

        document.getElementById(
            "popup"
        ).style.display = "flex";

    }else{

        wrong++;

        button.classList.add("wrong");
    }

    document.getElementById(
        "correct"
    ).innerText = correct;

    document.getElementById(
        "wrong"
    ).innerText = wrong;

    document.getElementById(
        "feedback"
    ).innerText =
    `Final Score → Correct: ${correct} | Wrong: ${wrong}`;
}

nextBtn.addEventListener("click",()=>{

    currentQuestion++;

    if(currentQuestion >= questions.length){

        question.innerText =
        "Quiz Finished!";

        document.querySelector(
            ".choices"
        ).style.display = "none";

        nextBtn.style.display = "none";

        return;
    }

    loadQuestion();
});

function closePopup(){

    document.getElementById(
        "popup"
    ).style.display = "none";
}

loadQuestion();
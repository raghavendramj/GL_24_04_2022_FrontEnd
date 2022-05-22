let question1 = new Question(
  "Who is the current Prime Minister of India?",
  ["Indira Gandhi", "Narendra Modi", "Devegowda", "Manmohan Singh"],
  "Narendra Modi"
);

let questions = [
  question1,
  new Question(
    "JavaScript Supports?",
    ["Functions", "XHTML", "CSS", "HTML"],
    "Functions"
  ),
  new Question(
    "Who is the best Batsmen in India?",
    ["Virat", "Rahul", "Dhawan", "Rishabh"],
    "Virat"
  ),
  new Question(
    "Which language got maximum follwers?",
    ["JavaScript", "Java", "Phython", "Go"],
    "JavaScript"
  ),
  new Question(
    "What is the national animal of India?",
    ["Tiger", "Lion", "Elephat", "Cheetha"],
    "Tiger"
  ),
  new Question(
    "Which of the following is used in pencil?",
    ["Graphite", "Magnesium", "Iron", "Aluminium"],
    "Tiger"
  ),
  new Question(
    "Which company acquired GL?",
    ["Upgrad", "Byjus", "Udemy", "Abacus"],
    "Byjus"
  ),
  new Question(
    "What does JSON stand for ?",
    [
      "Java Simple Object Notation",
      "JavaScript Object Notation",
      "Java Semi Object Notation",
      "None of the above",
    ],
    "JavaScript Object Notation"
  ),
];

function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.index = 0;
}

Quiz.prototype.getQuestionByIndex = function () {
  return this.questions[this.index];
};

Quiz.prototype.checkForCorrectAnswer = function (answer) {
  //Question -> this.getQuestionByIndex() -> question2
  if (this.getQuestionByIndex().isCorrectAnswer(answer)) {
    this.score++;
  }
  this.index++;
};

Quiz.prototype.isEnded = function () {
  return this.index === this.questions.length;
};

function Question(questionText, choices, answer) {
  this.text = questionText;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.isCorrectAnswer = function (choice) {
  return this.answer === choice;
};

function loadQuestions() {
  if (quiz.isEnded()) {
    showFinalScores();
  } else {
    let currentQuestion = quiz.getQuestionByIndex();
    
    let element = document.getElementById("question"); // <p id="question"></p>
    element.innerHTML = currentQuestion.text;

    let choices = currentQuestion.choices;
    for (let i = 0; i < choices.length; i++) {
      let eachChoiceElement = document.getElementById("choice" + i); //<span id="choice0"></span>
      eachChoiceElement.innerHTML = choices[i];

      let eachButtonElement = document.getElementById("btn" + i);
      eachButtonElement.onclick = function () {
        quiz.checkForCorrectAnswer(choices[i]);
        loadQuestions();
      };
    }
    showProgress();
  }
}
let quiz = new Quiz(questions);
loadQuestions();

function showFinalScores() {
  let resultPercentage = (quiz.score / questions.length) * 100;
  let completeHTML = `<h1> Result </h1>
     <h2 id='score'> Your Scores : ${quiz.score} </h2>
     <h3>And mark percentage is : ${resultPercentage}%  </h3>  
    `;
  let quizCanavs = document.getElementById("quiz");
  quizCanavs.innerHTML = completeHTML;
}

function showProgress() {
  let questNo = quiz.index + 1;
  let element = document.getElementById("progress");
  element.innerHTML = `Question ${questNo} of  ${quiz.questions.length}`;
}

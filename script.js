// Set up quiz questions
var questions = [
    {
      question: "What does HTML stand for?",
      answers: [
        { text: "Hyper Text Markup Language", correct: true },
        { text: "Hyperlinks and Text Markup Language", correct: false },
        { text: "Home Tool Markup Language", correct: false },
        { text: "High Text Markup Language", correct: false }
      ]
    },
    {
      question: "What does CSS stand for?",
      answers: [
        { text: "Creative Style Sheets", correct: false },
        { text: "Cascading Style Sheets", correct: true },
        { text: "Computer Style Sheets", correct: false },
        { text: "Colorful Style Sheets", correct: false }
      ]
    },
    {
      question: "What does JS stand for?",
      answers: [
        { text: "Java Symbol", correct: false },
        { text: "Java Syntax", correct: false },
        { text: "JavaScript", correct: true },
        { text: "Java Statement", correct: false }
      ]
    }
  ];

  // Set up variables
var startButton = document.getElementById("start-button");
var questionContainer = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons");
var resultContainer = document.getElementById("result-container");
var scoreEl = document.getElementById("score");
var initialsInput = document.getElementById("initials");
var submitScoreButton = document.getElementById("submit-score");
var highscoresContainer = document.getElementById("highscores-container");
var highscoresList = document.getElementById("highscores-list");
var clearScoresButton = document.getElementById("clear-scores");
var shuffledQuestions, currentQuestionIndex;
var timeLeft, timerId;

// Add event listeners
startButton.addEventListener("click", startQuiz);
answerButtonsEl.addEventListener("click", selectAnswer);
submitScoreButton.addEventListener("click", submitScore);
clearScoresButton.addEventListener("click", clearScores);

  // Define functions
function startQuiz() {
    // Shuffle questions
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    // Show first question
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    // Show question container and hide start button
    questionContainer.classList.remove("hidden");
    startButton.classList.add("hidden");
    // Set timer
    timeLeft = 60;
    timerId = setInterval(updateTimer, 1000);
  }

  function showQuestion(question) {
    // Clear previous answers
    resetAnswers();
    // Set question text
    questionEl.innerText = question.question;
    // Add answer buttons
    question.answers.forEach(answer => {
      var button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      answerButtonsEl.appendChild(button);
    });
  }

  function resetAnswers() {
    while (answerButtonsEl.firstChild) {
      answerButtonsEl.removeChild(answerButtonsEl.firstChild);
    }
  }
  
  function selectAnswer(event) {}
    var selectedButton = event.target;
    var correct = selectedButton.dataset.correct;
    // Highlight selected button
    Array.from(answerButtonsEl.children).forEach(button => {
      setStatusClass(button, button.dataset.correct);
    });
    // Show next question or end quiz if no questions left
    if (shuffledQuestions.length > currentQuestionIndex + 1) {}
      currentQuestionIndex++;
      setTimeout(() => showQuestion(shuffledQuestions[currentQuestionIndex]), 1000);

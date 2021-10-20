//DEPENDENCES
var answerOne = document.getElementById("answers1");
var answerTwo = document.getElementById("answers2");
var answerThree = document.getElementById("answers3");
var answerFour = document.getElementById("answers4");
var question = document.getElementById("Question");
var timer = document.getElementById("timerBox");
var startButton = document.getElementById("StartButton");
var buttonList = document.getElementById("buttonList");

//DATA
var index = 0;
var time = 30;
var score;
var highscore;
const answerLetter = ["A", "B", "C", "D"];
var questionOne = {
  Question: "The coding language that styles an HTML page",
  answer1: "CSF",
  answer2: "CSS",
  answer3: "SSC",
  answer4: "CCS",
  correct: "CSS",
};
var questionTwo = {
  Question: "Which sets a variable in JavaScript",
  answer1: "var",
  answer2: "make",
  answer3: "set",
  answer4: "assign",
  correct: "var",
};
var questionThree = {
  Question: "Which is used to close a line in JavaScript",
  answer1: "semi colon",
  answer2: "square brackets",
  answer3: "curly brackets",
  answer4: "forward slash",
  correct: "semi colon",
};
var questionFour = {
  Question: "Which data type stores properties",
  answer1: "boolean",
  answer2: "arrays",
  answer3: "objects",
  answer4: "integer",
  correct: "objects",
};
var questionFive = {
  Question: "What is the correct notation to select an id named target in CSS",
  answer1: ":target",
  answer2: ".target",
  answer3: "-target",
  answer4: "#target",
  correct: "#target",
};
const questionList = [
  questionOne,
  questionTwo,
  questionThree,
  questionFour,
  questionFive,
];
//FUNCTIONS
function startGame() {
  buttonList.setAttribute("style", "visibility: visible");
  totalTime();
  presentNextQuestion(index);
  startButton.disabled = true;
}
function checkCorrect() {
  questionContainer.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches("button")) {
      var correctAnswer = questionList[index].correct;
      if (element.textContent === correctAnswer) {
        console.log("It worked");
        if (index == 4) {
          quizOver();
        } else {
          index++;
          presentNextQuestion(index);
        }
      }
    }
  });

  //check if selected answer matches desired
  //if not correct, take 5 seconds off time
}
function setHighScore() {
  //take the score and store it to local storage
  //present it on a highscore list
}
function presentNextQuestion(index) {
  console.log(questionList[index].Question);
  question.textContent = questionList[index].Question;
  answerOne.textContent = questionList[index].answer1;
  answerTwo.textContent = questionList[index].answer2;
  answerThree.textContent = questionList[index].answer3;
  answerFour.textContent = questionList[index].answer4;
}
function totalTime() {
  var timerInterval = setInterval(function () {
    time--;
    timerBox.textContent = time;

    if (time === 0) {
      clearInterval(timerInterval);
      time = 0;
      timerBox.textContent = time;
      quizOver();
    }
  }, 1000);
}
function quizOver() {
  question.textContent = "Quiz over";
  buttonList.setAttribute("style", "visibility: hidden");

  //if time runs out display game over
  //when the timer hits 0 game is over
}

//USER INITILIZATION
startButton.addEventListener("click", startGame);
answerOne.addEventListener("click", checkCorrect);
answerTwo.addEventListener("click", checkCorrect);
answerThree.addEventListener("click", checkCorrect);
answerFour.addEventListener("click", checkCorrect);

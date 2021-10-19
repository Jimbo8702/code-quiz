//DEPENDENCES
var answerOne = document.getElementById("answers1");
var answerTwo = document.getElementById("answers2");
var answerThree = document.getElementById("answers3");
var answerFour = document.getElementById("answers4");
var question = document.getElementById("Question");
var timer = document.getElementById("timerBox");
var startButton = document.getElementById("StartButton");
//DATA
var time = 30;
var score;
var highscore;
const answerLetter = ["A", "B", "C", "D"];
var questionOne = {
  Question: "select 2",
  answer1: "1",
  answer2: "2",
  answer3: "3",
  answer4: "4",
};
var questionTwo = {
  Question: "",
  answer1: "",
  answer2: "",
  answer3: "",
  answer4: "",
};
var questionThree = {
  Question: "",
  answer1: "",
  answer2: "",
  answer3: "",
  answer4: "",
};
var questionFour = {
  Question: "",
  answer1: "",
  answer2: "",
  answer3: "",
  answer4: "",
};
var questionFive = {
  Question: "",
  answer1: "",
  answer2: "",
  answer3: "",
  answer4: "",
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
  totalTime();
  presentNextQuestion();
  startButton.disabled = true;
  }
  //starts count down
  //first question appears
}
function checkCorrect() {
  //check if selected answer matches desired
  //if not correct, take 5 seconds off time
}
function setHighScore() {
  //take the score and store it to local storage
  //present it on a highscore list
}
function presentNextQuestion(i) {
  console.log(questionList[i].Question);
  question.textContent = questionList[i].Question;
  answerOne.textContent = questionList[i].answer1;
  answerTwo.textContent = questionList[i].answer2;
  answerThree.textContent = questionList[i].answer3;
  answerFour.textContent = questionList[i].answer4;
  //grab a question
  //present on page
  //select in order from array
  //start at index 0 and add 1 everytime correct
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
  //if time runs out display game over
  //when the timer hits 0 game is over
}
//USER INITILIZATION
startButton.addEventListener("click", startGame);
answerOne.addEventListener("click", checkCorrect);
answerTwo.addEventListener("click", checkCorrect);
answerThree.addEventListener("click", checkCorrect);
answerFour.addEventListener("click", checkCorrect);

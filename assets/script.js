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
  Question: "",
  answer1: "",
  answer2: "",
  answer3: "",
  answer4: "",
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
function presentNextQuestion() {
  //grab a question
  //present on page
  //select in order from array
  //start at index 0 and add 1 everytime correct
}
function totalTime() {
  //sets the timer to 30s
  //count down and at 0 present quiz over
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

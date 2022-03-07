const quizDB = [
  {
    question: "Q1: What is the full form of JS?",
    a: "Javascript",
    b: "Jabascript",
    c: "Jacascript",
    d: "Jadascript",
    ans: "ans1",
  },
  {
    question: "Q2: What is HTML?",
    a: "OOPS",
    b: "Markup Language",
    c: "DBMS",
    d: "CNS",
    ans: "ans2",
  },
  {
    question: "Q2: What is CSS?",
    a: "OOPS",
    b: "Cascading Style Sheet",
    c: "CNS",
    d: "Markup Language",
    ans: "ans3",
  },
];

const question = document.querySelector(".questions");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  const questionList = quizDB[questionCount];
  question.innerHTML = questionList.question;
  option1.innerHTML = questionList.a;
  option2.innerHTML = questionList.b;
  option3.innerHTML = questionList.c;
  option4.innerHTML = questionList.d;
};

loadQuestion();

const getCheckedAnswer = () => {
  let answer;
  answers.forEach((curAnsEle) => {
    if (curAnsEle.checked) {
      answer = curAnsEle.id;
    }
  });
  return answer;
};
submit.addEventListener("click", () => {
  const checkedAnswer = getCheckedAnswer();
  answers.forEach((curAnsEle) => curAnsEle.checked = false);
  if (checkedAnswer === quizDB[questionCount].ans) {
    score++;
  }
  questionCount++;
  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `<h3>You scored ${score}/${quizDB.length} ✌️</h3>
    <button class="btn" onclick="location.reload()">Play Again</button>`;

    showScore.classList.remove("scoreArea");
    question.parentNode.style.display = 'none'
  }
});

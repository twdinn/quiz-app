const quizData = [
  {
    question: "What hockey team has won the most Stanley cups ?",
    a: "Pittsburgh Penguins",
    b: "Boston Bruins",
    c: "Montreal Canadiens",
    d: "Toronto Maple Leafs",
    correct: "c",
  },
  {
    question: "Who scored a record 10 hat tricks in one NHL season ?",
    a: "Wayne Gretzky",
    b: "Alex Ovechkin",
    c: "Mario Lemieux",
    d: "Guy Lafleur",
    correct: "a",
  },
  {
    question:
      "Who was the first player in history to score 50 goals in one season ?",
    a: "Wayne Gretzky",
    b: "Bobby Hull",
    c: "Ted Kennedy",
    d: "Maurice Richard",
    correct: "d",
  },
  {
    question: "Which team won 4 Stanley Cups in a row?",
    a: "Montreal Canadiens",
    b: "Toronto Maple Leafs",
    c: "New York Islanders",
    d: "Detroit Red Wings",
    correct: "c",
  },
  {
    question:
      "What goalie had the most shutouts in the 2016-2017 regular season ?",
    a: "Jonathan Quick ",
    b: "Braden Holtby",
    c: "Ben Bishop ",
    d: "Carey Price ",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
  answerElements.forEach((answerElement) => (answerElement.checked = false));
};

const loadQuiz = () => {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

const getSelected = () => {
  let answer;

  answerElements.forEach((answerElement) => {
    if (answerElement.checked) {
      answer = answerElement.id;
    }
  });
  return answer;
};

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer === quizData[currentQuiz].correct) {
    score++;
  }
  currentQuiz++;

  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    const percent = (score / quizData.length) * 100;
    quiz.innerHTML = `<h2>You Answered ${score} Out Of ${quizData.length} Correctly For a Grade Of ${percent}%</h2>
      
      <button onClick = "location.reload()">Reload</button`;
  }
});

loadQuiz();

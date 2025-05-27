const questions = [
  {
    question: "Qual gel não faz parte da linha Control?",
    options: ["Control White", "Control Pink", "Control Crystal", "Control Cover"],
    correct: 2
  },
  {
    question: "Em que ano a Vòlia foi lançada?",
    options: ["2018", "2020", "2016", "2019"],
    correct: 0
  },
  {
    question: "Qual a nacionalidade da Vòlia?",
    options: ["Empresa Americana", "Empresa Brasileira", "Empresa Argentina", "Empresa Francesa"],
    correct: 1
  },
  {
    question: "Qual foi a última cor de Gel lançada pela Vòlia?",
    options: ["Control Nude", "Classic Pink Glitter", "Classic Blanc Hard", "Classic Blush"],
    correct: 3
  },
  {
    question: "Qual destes produtos não faz parte da preparação da unha?",
    options: ["Prep", "Desidrat", "Primer ácido", "Òleo de Parfum"],
    correct: 3
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const nextBtn = document.getElementById('nextBtn');
const resultEl = document.getElementById('result');
const quizEl = document.getElementById('quiz');

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  answersEl.innerHTML = '';
  q.options.forEach((opt, index) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.onclick = () => selectAnswer(index);
    answersEl.appendChild(btn);
  });
}

function selectAnswer(index) {
  const isCorrect = index === questions[currentQuestion].correct;
  if (isCorrect) score++;
  Array.from(answersEl.children).forEach((btn, i) => {
    btn.disabled = true;
    btn.style.backgroundColor = i === questions[currentQuestion].correct ? '#28a745' : '#dc3545';
  });
  nextBtn.style.display = 'block';
}

nextBtn.onclick = () => {
  currentQuestion++;
  nextBtn.style.display = 'none';
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  quizEl.classList.add('hidden');
  resultEl.classList.remove('hidden');
  document.getElementById('result-title').textContent = 'Parabéns, Vòliete! ✨';
  document.getElementById('result-score').textContent = `Você acertou ${score} de ${questions.length} questões 💜`;
}

showQuestion();

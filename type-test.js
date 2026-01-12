const sentences = [
  "Practice makes a person perfect",
  "JavaScript is fun to learn",
  "Typing fast improves productivity",
  "Neuro train your brain daily"
];

const sentenceEl = document.getElementById("sentence");
const inputEl = document.getElementById("input");
const timeEl = document.getElementById("time");
const wpmEl = document.getElementById("wpm");
const restartBtn = document.getElementById("restart");

let startTime = null;
let timerInterval;

function loadSentence() {
  const random = Math.floor(Math.random() * sentences.length);
  sentenceEl.innerHTML = "";
  sentences[random].split("").forEach(char => {
    const span = document.createElement("span");
    span.innerText = char;
    sentenceEl.appendChild(span);
  });
}

loadSentence();


function startTimer() {
  startTime = new Date();
  timerInterval = setInterval(() => {
    const elapsed = Math.floor((new Date() - startTime) / 1000);
    timeEl.innerText = elapsed;
  }, 1000);
}


inputEl.addEventListener("input", () => {
  if (!startTime) startTimer();

  const chars = sentenceEl.querySelectorAll("span");
  const typed = inputEl.value.split("");

  chars.forEach((char, index) => {
    if (typed[index] == null) {
      char.classList.remove("correct", "wrong");
    } else if (typed[index] === char.innerText) {
      char.classList.add("correct");
      char.classList.remove("wrong");
    } else {
      char.classList.add("wrong");
      char.classList.remove("correct");
    }
  });


  if (typed.length === chars.length) {
    clearInterval(timerInterval);
    calculateWPM();
  }
});

function calculateWPM() {
  const words = inputEl.value.trim().split(" ").length;
  const timeTaken = (new Date() - startTime) / 60000;
  const wpm = Math.round(words / timeTaken);
  wpmEl.innerText = wpm;
}


restartBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  inputEl.value = "";
  timeEl.innerText = 0;
  wpmEl.innerText = 0;
  startTime = null;
  loadSentence();
});


const btn =document.querySelector(".buto");
btn.addEventListener("click",function(){
    window.history.back();
})

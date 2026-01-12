const startBtn=document.querySelector('.Btn-Container')
const gamearea = document.querySelector("#game-area");
const doto =document.querySelector("#dot")
const scorespan =document.querySelector(".sco")
const timespan =document.querySelector(".ti")
const recordspan =document.querySelector(".rec")

let score =0;
let timeleft =30;
let gamerunning =false;
let record =0;
let timerId = null;


if (doto) {
  doto.style.position = "absolute";
  doto.style.display = "none";
}

function spawnDot() {
    if (!gamearea || !doto) return;
    const areaWidth = gamearea.clientWidth;
    const areaHeight = gamearea.clientHeight;
    const dotSize = doto.offsetWidth || 20;

    const maxX = Math.max(0, areaWidth - dotSize);
    const maxY = Math.max(0, areaHeight - dotSize);

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    doto.style.left = x + "px";
    doto.style.top = y + "px";
}

function endGame() {
  gamerunning = false;
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
  if (doto) doto.style.display = "none";

  if (score > record) {
    record = score;
    recordspan.textContent = record;
  }
}

function startGame() {
  endGame();

  score = 0;
  timeleft = 30;
  gamerunning = true;

  scorespan.textContent = score;
  timespan.textContent = timeleft;

  if (doto) {
    doto.style.display = "block";
    if (!doto.offsetWidth) {
      doto.style.width = doto.style.width || "20px";
      doto.style.height = doto.style.height || "20px";
    }
    spawnDot();
  }

  timerId = setInterval(() => {
    timeleft--;
    timespan.textContent = timeleft;

    if (timeleft <= 0) {
      endGame();
    }
  }, 1000);
}

startBtn.addEventListener('click', startGame);

doto.addEventListener('click', function () {
    if (!gamerunning) return;

    score++;
    scorespan.textContent = score;
    spawnDot();
});


const btn =document.querySelector(".buto");
btn.addEventListener("click",function(){
    window.history.back();
})
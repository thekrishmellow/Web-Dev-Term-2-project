const startBtn = document.querySelector(".starto");
const stopBtn = document.querySelector(".stopo");
const lights = document.querySelectorAll(".g");
const statusText = document.querySelector(".status");
const currentSpan = document.querySelector(".crt");
const recordSpan = document.querySelector(".lrt");

let startTime = null;
let timeoutId = null;
let isRunning = false;
let bestTime = null;

function setRed(){
    lights.forEach(light=> light.style.backgroundColor = "#d60000");
}
function setGreen(){
    lights.forEach(light=> light.style.backgroundColor="#00c853");
}

startBtn.addEventListener("click", () => {
    if (isRunning) return;

    isRunning = true;
    statusText.textContent = "Wait...";
    currentSpan.textContent = "-";
    setRed();

    const randomDelay = Math.random() * 3000 + 1000;

    timeoutId = setTimeout(() => {
        setGreen();
        statusText.textContent = "CLICK!";
        startTime = Date.now();
    }, randomDelay);
});
stopBtn.addEventListener("click", () => {
    if (!isRunning) return;

    if (!startTime) {
        clearTimeout(timeoutId);
        statusText.textContent = "Too Early!";
        isRunning = false;
        return;
    }

    const reactionTime = Date.now() - startTime;
    currentSpan.textContent = reactionTime + " ms";

    if (bestTime === null || reactionTime < bestTime) {
        bestTime = reactionTime;
        recordSpan.textContent = bestTime + " ms";
    }

    statusText.textContent = "Done!";
    isRunning = false;
    startTime = null;
});

setRed();

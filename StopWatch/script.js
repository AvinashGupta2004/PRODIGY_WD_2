const timerDisplay = document.getElementById("stopwatch-text");
const controls = {
  start: document.getElementById("start"),
  stop: document.getElementById("stop"),
  reset: document.getElementById("reset"),
};

const params = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  milliseconds: 0,
  stopTimer: false,
};

function startCount() {
  params.stopTimer = false;
  timerFunc();
}

function stopCount() {
  params.stopTimer = true;
}
function formatTime(value) {
  return value.toString().padStart(2, "0");
}

function timerFunc() {
  if (params.stopTimer) {
    return;
  }

  params.milliseconds += 10;

  if (params.milliseconds >= 100) {
    params.milliseconds = 0;
    params.seconds++;
  }
  if (params.seconds === 60) {
    params.seconds = 0;
    params.milliseconds = 0;
    params.minutes++;
  }
  if (params.minutes === 60) {
    params.minutes = 0;
    params.seconds = 0;
    params.milliseconds = 0;
    params.hours++;
  }

  updateTimerDisplay();
  if (!params.stopTimer) {
    setTimeout(timerFunc,95);
  }
}

function updateTimerDisplay() {
  timerDisplay.innerHTML = `${formatTime(params.hours)}:${formatTime(
    params.minutes
  )}:${formatTime(params.seconds)}:${formatTime(params.milliseconds)}`;
}

controls.start.addEventListener("click", startCount);
controls.stop.addEventListener("click", stopCount);
controls.reset.addEventListener("click", () => {
  params.hours = params.minutes = params.seconds = params.milliseconds = 0;
  updateTimerDisplay();
  params.stopTimer = true;
});

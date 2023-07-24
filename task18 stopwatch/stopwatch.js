var stopwatchInterval;
var milliseconds = 0;
var seconds = 0;
var minutes = 0;

function displayTime() {
  var display = document.getElementById("display");
  display.textContent = formatTime();
}

function formatTime() {
  var formattedTime =
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds) +
    ":" +
    (milliseconds < 10 ? "0" + milliseconds : milliseconds);
  return formattedTime;
}

function startStopwatch() {
  stopwatchInterval = setInterval(function () {
    milliseconds += 10;
    if (milliseconds == 1000) {
      seconds++;
      milliseconds = 0;
    }
    if (seconds == 60) {
      minutes++;
      seconds = 0;
    }
    displayTime();
  }, 10);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  displayTime();
}

document.getElementById("startBtn").addEventListener("click", startStopwatch);
document.getElementById("stopBtn").addEventListener("click", stopStopwatch);
document.getElementById("resetBtn").addEventListener("click", resetStopwatch);

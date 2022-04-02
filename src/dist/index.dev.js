"use strict";

var boxes = document.querySelectorAll(".box");
var mole = document.querySelector(".mole");
var time = document.querySelector("#time-left");
var score = document.querySelector("#score");
var button = document.querySelector(".btn");
var result = 0;
var hitPosition;
var currentTime = 30;
var timer = null;

function randomBox() {
  boxes.forEach(function (box) {
    box.classList.remove("mole");
  });
  var randomBox = boxes[Math.floor(Math.random() * 9)];
  randomBox.classList.add("mole");
  hitPosition = randomBox.id;
}

boxes.forEach(function (box) {
  box.addEventListener("mousedown", function () {
    if (box.id == hitPosition) {
      result++;
      score.innerHTML = result;
      hitPosition = null;
    }
  });
});

function moveMole() {
  timer = setInterval(randomBox, 1000);
}

moveMole();

function countDown() {
  currentTime--;
  time.innerHTML = currentTime;

  if (currentTime == 0) {
    clearInterval(countDownTimer);
    clearInterval(timer);
    alert("Game Over! Your final score is" + " " + result);
  }
}

var countDownTimer = setInterval(countDown, 1000);
//# sourceMappingURL=index.dev.js.map

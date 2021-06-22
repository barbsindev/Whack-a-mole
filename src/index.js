const boxes = document.querySelectorAll(".box");
const mole = document.querySelector(".mole");
const time = document.querySelector("#time-left");
const score = document.querySelector("#score");
const button = document.querySelector(".btn");

let result = 0;
let hitPosition;
let currentTime = 30;
let timer = null;

function randomBox() {
  boxes.forEach((box) => {
    box.classList.remove("mole");
  });

  let randomBox = boxes[Math.floor(Math.random() * 9)];
  randomBox.classList.add("mole");
  hitPosition = randomBox.id;
}

boxes.forEach((box) => {
  box.addEventListener("mousedown", () => {
    if (box.id == hitPosition) {
      result++;
      score.innerHTML = result;
      hitPosition = null;
    }
  });
});
function moveMole() {
  timer = setInterval(randomBox, 500);
}

// randomBox();
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

let countDownTimer = setInterval(countDown, 1000);

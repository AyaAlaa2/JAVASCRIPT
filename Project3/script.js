"use strict";

let currentNum = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscoreArr = [];

const displayMessage = (message) => {
  return (document.querySelector(".message").textContent = message);
};

document.querySelector(".check").addEventListener("click", function () {
  let num = Number(document.querySelector(".guess").value);

  if (num !== currentNum) {
    num > currentNum ? displayMessage("too high!") : displayMessage("too low!");
    if (score > 0) {
      --score;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game!");
    }
  } else if (num === currentNum) {
    highscoreArr.push(num);
    displayMessage("current number!");
    document.querySelector(".highscore").textContent = Math.max(
      ...highscoreArr
    );
    document.body.style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = num;
    document.querySelector(".number").style.width = "30rem";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  currentNum = Math.floor(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  document.body.style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
});

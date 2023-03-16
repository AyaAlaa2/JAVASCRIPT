"use strict";
const score1 = document.querySelector("#score--0");
const score2 = document.querySelector("#score--1");
const current1 = document.querySelector("#current--0");
const current2 = document.querySelector("#current--1");
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");
const btnnew = document.querySelector(".btn--new");
const btnroll = document.querySelector(".btn--roll");
const btnhold = document.querySelector(".btn--hold");
const imgScore = document.querySelector(".dice");

let scoreArr;
let score;
let currentPlayer;
let otherPlayer;
let currentScore;
let canPlay;

const startTheGame = () => {
  canPlay = true;
  scoreArr = [0, 0];
  score = 0;
  currentPlayer = 0;
  otherPlayer = 1;
  score1.textContent = 0;
  score2.textContent = 0;
  current1.textContent = 0;
  current2.textContent = 0;
  imgScore.classList.add("hidden");
};

const swithPlayer = () => {
  document.querySelector(`#current--${currentPlayer}`).textContent = 0;
  score = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  otherPlayer = currentPlayer === 0 ? 1 : 0;
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.toggle("player--active");
  document
    .querySelector(`.player--${otherPlayer}`)
    .classList.toggle("player--active");
};

startTheGame();
btnroll.addEventListener("click", function () {
  if (canPlay) {
    let dice = Math.floor(Math.random() * 6) + 1;
    imgScore.classList.remove("hidden");
    imgScore.src = `img/dice-${dice}.png`;

    if (dice !== 1) {
      score += dice;
      document.querySelector(`#current--${currentPlayer}`).textContent = score;
    } else {
      swithPlayer();
    }
  }
});

btnhold.addEventListener("click", function () {
  if (canPlay) {
    scoreArr[currentPlayer] += score;
    document.querySelector(`#score--${currentPlayer}`).textContent =
      scoreArr[currentPlayer];

    if (scoreArr[currentPlayer] >= 100) {
      imgScore.classList.add("hidden");
      canPlay = false;
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove("player--active");
    } else {
      swithPlayer();
    }
  }
});

btnnew.addEventListener("click", function () {
  startTheGame();
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.remove("player--winner");
  player1.classList.add("player--active");
});

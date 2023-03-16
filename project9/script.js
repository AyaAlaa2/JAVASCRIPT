"use strict";

const text = document.querySelector("#text");
const speed = document.querySelector("#speed");
let NumOfSpeed = 500;
text.textContent = "";
const words = "We Love Programming!";
let count = 0;

writeWords();

function writeWords() {
  if (count < words.length) {
    text.textContent = text.textContent + words.charAt(count);
    ++count;
  } else {
    count = 0;
    text.textContent = "";
  }

  setTimeout(writeWords, NumOfSpeed);
}

speed.addEventListener("input", function (e) {
  NumOfSpeed = 500 / e.target.value;
});

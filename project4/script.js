const showButton = document.querySelectorAll(".showButton");
const message = document.querySelector(".message");
const closebtn = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

const open = function () {
  message.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const close = function () {
  message.classList.add("hidden");
  overlay.classList.add("hidden");
};

// open widow modal
for (let i = 0; i < showButton.length; ++i) {
  showButton[i].addEventListener("click", open);
}

// close the widow modal
closebtn.addEventListener("click", close);
overlay.addEventListener("click", close);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (!message.classList.contains("hidden")) {
      close();
    }
  }
});

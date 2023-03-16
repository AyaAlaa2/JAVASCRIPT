const content = document.querySelector(".content");
const home = document.querySelector(".home");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");
const close = document.querySelector("#close");
const open = document.querySelector("#open");
const container = document.querySelector(".container");
const circle = document.querySelector(".circle");

const closeFun = () => {
  open.classList.remove("hidden");
  close.classList.add("hidden");
  home.classList.add("hidden");
  about.classList.add("hidden");
  contact.classList.add("hidden");
  container.style.transform = "rotate(0deg)";
  circle.style.transform = "rotate(0deg)";
  document.body.style.overflowY = "visible";
};

const openFun = () => {
  open.classList.add("hidden");
  close.classList.remove("hidden");
  home.classList.remove("hidden");
  contact.classList.remove("hidden");
  about.classList.remove("hidden");
  container.style.transform = "translate(0 0)";
  container.style.transform = "rotate(-30deg)";
  document.body.style.overflowY = "hidden";
  circle.style.transform = "rotate(-60deg)";
  home.style.transform = "translate(10px)";
  about.style.transform = "translate(40px)";
  contact.style.transform = "translate(70px)";
};

open.addEventListener("click", openFun);
close.addEventListener("click", closeFun);

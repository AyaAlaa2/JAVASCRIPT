const times = document.querySelector(".time");
const dates = document.querySelector(".date");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const toggle = document.querySelector(".toggle");
const container = document.querySelector(".container");
const cp2 = document.querySelector(".cp2");
setInterval(setTime, 100);

toggle.addEventListener("click", function () {
  container.classList.toggle("darkMode");
  if (container.classList.contains("darkMode")) {
    toggle.textContent = "white mode";
  } else {
    toggle.textContent = "dark mode";
  }
  toggle.classList.toggle("bgColor");
  times.classList.toggle("fontwhits");
  dates.classList.toggle("fontwhits");
  hour.classList.toggle("bgwhite");
  minute.classList.toggle("bgwhite");
  cp2.classList.toggle("bgwhite");
});

function setTime() {
  let dateOdday = new Date();
  let hours =
    dateOdday.getHours() > 12
      ? dateOdday.getHours() % 12
      : dateOdday.getHours();
  let minuts =
    dateOdday.getMinutes() < 10
      ? "0" + dateOdday.getMinutes()
      : dateOdday.getMinutes();
  let seconds = dateOdday.getSeconds();
  let PmAm = dateOdday.getHours() > 12 ? "PM" : "AM";
  let day = dateOdday.toLocaleString("en-us", { weekday: "long" });
  let month = dateOdday.toLocaleString("en-us", { month: "short" });
  let date = dateOdday.getDate();

  times.textContent = hours + ":" + minuts + " " + PmAm;
  dates.textContent = day + "," + month + " ";

  let dateSpan = document.createElement("span");
  let text = document.createTextNode(`${date}`);
  dateSpan.appendChild(text);
  dates.appendChild(dateSpan);

  hour.style.transform = `translate(-50%, -100%) rotate(${30 * hours}deg)`;
  minute.style.transform = `translate(-50%, -100%) rotate(${6 * minuts}deg)`;
  second.style.transform = `translate(-50%, -100%) rotate(${6 * seconds}deg)`;
}

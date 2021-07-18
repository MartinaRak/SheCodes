let time = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[time.getDay()];
let hour = time.getHours();
let minutes = time.getMinutes();

let date = document.querySelector("#date");
date.innerHTML = `${day}, ${hour}:${minutes}`;

function city(event) {
  event.preventDefault();
  let word = document.querySelector("#search");
  let change = document.querySelector("h2");
  change.innerHTML = word.value;
}
let submit = document.querySelector("#engine");
submit.addEventListener("submit", city);

function switchF(event) {
  event.preventDefault();
  let temperature = document.querySelector("h1");
  temperature.innerHTML = 73.4 + "°";
}
let changeToF = document.querySelector("#f");
changeToF.addEventListener("click", switchF);

function switchC(event) {
  event.preventDefault();
  let temperature = document.querySelector("h1");
  temperature.innerHTML = 23 + "°";
}
let changeToC = document.querySelector("#c");
changeToC.addEventListener("click", switchC);

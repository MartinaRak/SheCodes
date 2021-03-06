let time = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[time.getDay()];
let hour = time.getHours();
let minutes = time.getMinutes();

let date = document.querySelector("#date");
date.innerHTML = `${day}, ${hour}:${minutes}`;

function city(event) {
  event.preventDefault();
  let word = document.querySelector("#search");
  let changeCity = document.querySelector("#city-name");
  changeCity.innerHTML = word.value;
  searchWeather(word.value);
}
let submit = document.querySelector("#engine");
submit.addEventListener("submit", city);

function searchWeather(city) {
  let apiKey = "6aeef2ad470d059da56cf04d1367bfcf";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}`).then(searchTemp);
}

function searchTemp(response) {
  let temp = Math.round(response.data.main.temp);
  let displayTemp = document.querySelector("#current-temp");
  displayTemp.innerHTML = `${temp}°C`;
  let displayCity = document.querySelector("#city-name");
  displayCity.innerHTML = response.data.name;

  let conditions = response.data.weather[0].description;
  let displayConditions = document.querySelector("#condition");
  displayConditions.innerHTML = `${conditions}`;

  let humidity = response.data.main.humidity;
  let displayHumidity = document.querySelector("#humidity");
  displayHumidity.innerHTML = `Humidity: ${humidity}%`;

  let wind = Math.round(response.data.wind.speed);
  let displayWind = document.querySelector("#wind");
  displayWind.innerHTML = `Wind: ${wind} km/h`;
}

function showCurrent(position) {
  let apiKey = "6aeef2ad470d059da56cf04d1367bfcf";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(searchTemp);
}
function findOutLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showCurrent);
}
let findOutCurrent = document.querySelector("#current-button");
findOutCurrent.addEventListener("click", findOutLocation);

function searchCity() {
  let apiKey = "7ed26a6948c661d05fafe7355b41b2ec";
  let city = document.querySelector("#cityName").value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showTemp);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#cityName").value;
  searchCity(city);
}

function showTemp(response) {
  let apiKey = "7ed26a6948c661d05fafe7355b41b2ec";
  let city = document.querySelector("#cityName").value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  let mess = `The temperature in ${city} is ${temperature} degrees`;
  let displayMess = document.querySelector("#displayTemp");
  displayMess.innerHTML = mess;

  axios.get(url).then(showTemp);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("Durban");

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let currentDate = document.querySelector("#date");
let now = new Date();
let date = now.getDate();
let months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];
let year = now.getFullYear();
let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
let day = days[now.getDay()];
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

currentDate.innerHTML = `${date} ${month} ${year} ; ${day}day ${hours}:${minutes}`;

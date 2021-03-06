import { City } from "./city";
import { Day } from "./forecast";

async function callWeatherData(city) {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&APPID=2721941ff1d23996817409883d4be5dd",
      { mode: "cors" }
    );
    const data = await response.json();
    makeObject(data);
  } catch (error) {
    console.log("Something went wrong: " + error);
  }
}

async function callForecastData(lat, lon, city) {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lon=" +
        lon +
        "&lat=" +
        lat +
        "&APPID=2721941ff1d23996817409883d4be5dd",
      { mode: "cors" }
    );
    const data = await response.json();
    addForecast(data, city);
  } catch (error) {
    console.log("Something went wrong: 2" + error);
  }
}

function makeObject(data) {
  let lat = data.coord.lat;
  let lon = data.coord.lon;
  let desc = data.weather[0].description;
  let temp = data.main.temp;
  let humidity = data.main.humidity;
  let windSpeed = data.wind.speed;
  let cloudPercentage = data.clouds.all;
  let name = data.name;
  let country = data.sys.country;
  let icon = data.weather[0].icon;
  let offset = data.timezone;
  let feelsLike = data.main.feels_like;
  let city = new City(
    lat,
    lon,
    desc,
    temp,
    humidity,
    windSpeed,
    cloudPercentage,
    name,
    country,
    icon,
    offset,
    feelsLike
  );
  callForecastData(lat, lon, city);
}

function addForecast(data, city) {
  let sevenDayForecast = [];
  let cityDt = data.current.dt;
  for (let day of data.daily) {
    let temp = day.temp.day;
    let desc = day.weather[0].description;
    let windSpeed = day.wind_speed;
    let cloudPercentage = day.clouds;
    let icon = day.weather[0].icon;
    let dt = day.dt;
    let fcDay = new Day(temp, desc, windSpeed, cloudPercentage, icon, dt);
    sevenDayForecast.push(fcDay);
  }
  city.setForecast(sevenDayForecast);
  city.setDt(cityDt);
  renderCurrentDay(city);
  renderForecast(city);
}

function renderCurrentDay(city) {
  const content = document.getElementById("content");
  const forecast = document.getElementById("forecast");
  const currTemp = document.getElementById("descDiv");
  const tempDiv = document.getElementById("temp");
  const windSpeedDiv = document.getElementById("windSpeed");
  const nameDiv = document.getElementById("name");
  const icon = document.getElementById("icon");
  currTemp.textContent = city.getTemperature() + " ?? C";
  tempDiv.innerHTML = `Feels like: <br> <i class="fa-solid fa-temperature-high"></i> ${city.getFeelsLike()} ?? C`;
  windSpeedDiv.innerHTML = `Wind speed: <br> <i class="fa-solid fa-wind"></i>  ${city.getWindSpeed()} km/h`;
  nameDiv.textContent = city.getCity() + ", " + city.getCountry();
  icon.src = city.getIcon();
  const dayName = document.getElementById("dayName");
  dayName.textContent = city.getCurrentDay() + ", " + city.getCurrentTime();
}

function renderForecast(city) {
  const forecasts = document.getElementById("forecast");
  forecasts.innerHTML = "";
  for (let day of city.getForecast()) {
    let dayDiv = document.createElement("div");
    dayDiv.classList.add("forecast-day");
    let nameDiv = document.createElement("div");
    nameDiv.textContent = day.getCurrentDay();
    let descDiv = document.createElement("div");
    let descImg = document.createElement("img");
    descImg.src = day.getIcon();
    descDiv.append(descImg);
    let tempDiv = document.createElement("div");
    tempDiv.textContent = day.getTemperature() + "?? C";
    dayDiv.append(nameDiv, descDiv, tempDiv);
    forecasts.appendChild(dayDiv);
  }
}

const button = document.getElementById("inputs");
button.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = document.getElementById("city-input").value;
  callWeatherData(input);
});

export { callWeatherData };

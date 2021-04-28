const weather = document.querySelector(".js-weather");
const API_KEY = "c20c2e4f835c7ca9edf8329477a6d36a";
const COORDS = "coords";

// Fahrenheit use units=imperial
// Celsius use units=metric
function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      //   console.log(response.json());
      return response.json();
    })
    .then(function (json) {
      console.log(json);
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature} @ ${place}`;
    });
}

function saveCoods(coodsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coodsObj)); // number to String
}
function handelGeoSucces(position) {
  //   console.log("GEO: ", position);
  //   console.log("GEO latitude: ", position.coords.latitude);
  //   console.log("GEO longitude: ", position.coords.longitude);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const coodsObj = {
    latitude,
    longitude,
  };

  saveCoods(coodsObj);
  getWeather(latitude, longitude);
}

function handelGeoError() {
  console.log("Cant Access GEO Location!");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handelGeoSucces, handelGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);

  if (loadedCoords === null) {
    console.log("GEO NULL");
    askForCoords();
  } else {
    //getWeather
    const parseCoords = JSON.parse(loadedCoords);
    console.log("parseCoords:", parseCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();

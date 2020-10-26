var apiKey = localStorage.getItem("myApi");
var formEl = document.getElementById("search-form");
var apiBtnEl = document.getElementById("apibtn");
var apiKeyEl = document.getElementById("apikey");
var cities = JSON.parse(localStorage.getItem("cities"));
var cityListEl = document.getElementById("city-list");

function onLoad() {
  if (apiKey) {
    document.getElementById("default").innerHTML = "";
    document.getElementById("current-content").style.visibility = "visible";
    document.getElementById("forecast").style.visibility = "hidden";
  } else {
    document.getElementById("current-content").style.visibility = "hidden";
    document.getElementById("forecast").style.visibility = "hidden";
  };
  if (cities) {
    for (i = 0; i < cities.length; i++) {
      var newCityEl = document.createElement("li");
      newCityEl.setAttribute("class", "list-group-item");
      newCityEl.textContent = cities[i];
      cityListEl.appendChild(newCityEl);
    }
  } else {
    cities = [];
  }
};

function apiKeySub() {
  apiKey = apiKeyEl.value;
  localStorage.setItem("myApi", apiKey);
  fetch("https://api.openweathermap.org/data/2.5/weather?units=imperial&q=chico&appid=" + apiKey)
    .then(function (res) {
      return res.json();
    }).then(function (res) {
      if (res.cod === 200) {
        onLoad();
      } else {
        alert("Not a valid OpenWeather API key.  Please enter a valid key.  Go to openweathermap.org for more information.");
        apiKeyEl.value = "";
        localStorage.removeItem("myApi");
      }
    });
};

function searchResults(event, city) {
  event.preventDefault();
  var currentWeather = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=" + city + "&appid=" + apiKey;
  if (city) {
    fetch(currentWeather).then(function (res) {
      return res.json();
    }).then(function (res) {
      if (res.cod === 200) {
        var date = new Date().toLocaleDateString("en-US");
        var icon = "http://openweathermap.org/img/wn/" + res.weather[0].icon + ".png";
        var currentTitle = document.getElementById("current-title");
        currentTitle.textContent = res.name + " (" + date + ") ";
        var iconEl = document.createElement("img");
        iconEl.setAttribute("src", icon);
        currentTitle.appendChild(iconEl);
        var currentTemp = document.getElementById("current-temp");
        var currentHum = document.getElementById("current-hum");
        var currentWind = document.getElementById("current-wind");
        currentTemp.textContent = "Temperature: " + Math.round(res.main.temp) + "°F";
        currentHum.textContent = "Humidity: " + res.main.humidity + "%";
        currentWind.textContent = "Wind Speed: " + res.wind.speed.toFixed(1) + " mph";
        var lat = res.coord.lat;
        var long = res.coord.lon;
        var currentUviApi = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + long + "&appid=" + apiKey;
        fetch(currentUviApi).then(function (uvRes) {
          return uvRes.json();
        }).then(function (uvRes) {
          var currentUviEl = document.getElementById("current-uvi");
          var currentUv = uvRes.value;
          var uvCond = ""
          if (currentUv < 3) {
            uvCond = "badge-success";
          } else if (currentUv > 3 && currentUv < 6) {
            uvCond = "badge-warning";
          } else {
            uvCond = "badge-danger";
          }
          currentUviEl.innerHTML = "UV Index: <span class='badge " + uvCond + "'>" + currentUv + "</span>";
        });
        var forecastWeather = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + long + "&exclude=current,minutely,hourly,alerts&units=imperial&appid=" + apiKey;
        fetch(forecastWeather).then(function (res) {
          return res.json();
        }).then(function (res) {
          document.getElementById("forecast").style.visibility = "visible";
          for (i = 1; i < 6; i++) {
            var date = new Date(res.daily[i].dt * 1000).toLocaleDateString();
            var icon = "http://openweathermap.org/img/wn/" + res.daily[i].weather[0].icon + ".png";
            var forTemp = res.daily[i].temp.max;
            var forHum = res.daily[i].humidity;
            var forCardEl = document.getElementById("forecast-" + i);
            forCardEl.innerHTML = "<h5>" + date + "</h5><img src='" + icon + "' /><h5>Temp: " + forTemp + "°F</h5><h5>Humidity: " + forHum + "%</h5>";
            document.getElementById("search").value = "";
          }
        });
      } else {
        alert("Request did not go through, please check that city name is correct and try again.");
      };
    });

    if (!cities.includes(city)) {
      var cityListEl = document.getElementById("city-list");
      var newCityEl = document.createElement("li");
      newCityEl.setAttribute("class", "list-group-item");
      newCityEl.textContent = city;
      cityListEl.appendChild(newCityEl);
      cities.push(city);
      localStorage.setItem("cities", JSON.stringify(cities));
    }
  } else {
    alert("Please enter a city name.");
  }
};

function clearCities() {
  localStorage.removeItem("cities");
  cityListEl.innerHTML = "";
}

onLoad();

formEl.addEventListener("submit", function (event) {
  var city = document.getElementById("search").value;
  if (apiKey) {
    searchResults(event, city);
  }
});
apiBtnEl.addEventListener("click", apiKeySub);

cityListEl.addEventListener("click", function (event) {
  if (event.target && event.target.matches("li.list-group-item")) {
    city = event.target.innerText;
    searchResults(event, city);
  }
});
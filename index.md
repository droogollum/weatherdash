<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
    integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
  <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
    integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
  <link rel="stylesheet" href="./assets/css/styles.css">

  <title>weatherdash</title>
</head>

<body>
  <header class="bg-dark text-center p-3">
    <h1>weatherdash</h1>
  </header>

  <div class="container-fluid">
    <div class="row p-3">
      <div class="col-12 col-md-3 p-3">
        <form id="search-form">
          <div class="input-group mb-3">
            <input id="search" type="text" class="form-control" placeholder="Search cities" aria-label="Search city"
              aria-describedby="button-addon2">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="submit" id="button-addon2">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
        </form>
        <div class="card">
          <div onclick="clearCities()" class="card-header">Clear List</div>
          <ul id="city-list" class="list-group list-group-flush">
          </ul>
        </div>
      </div>
      <div class="col-12 col-md-9">
        <div class="row p-3">
          <div class="col-12">
            <div class="card border-dark mb-3">
              <div id="current" class="card-body text-dark">
                <div id="default">
                  <h2>Please enter your OpenWeather API key:</h2>
                  <div class="input-group mb-3">
                    <input id="apikey" type="text" class="form-control" placeholder="OpenWeather API Key"
                      aria-label="Open Weather API Key" aria-describedby="Enter API key">
                    <div class="input-group-append">
                      <button id="apibtn" class="btn btn-outline-secondary" type="button">Submit</button>
                    </div>
                  </div>
                  <a href="https://home.openweathermap.org/users/sign_up">Click here to signup for an OpenWeather API
                    key</a>
                </div>
                <div id="current-content">
                  <h2 id="current-title" class="card-title">City</h2>
                  <h5 id="current-temp" class="card-text">Temperature</h5>
                  <h5 id="current-hum" class="card-text">Humidity</h5>
                  <h5 id="current-wind" class="card-text">Wind Speed</h5>
                  <h5 id="current-uvi" class="card-text">UV Index</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row p-3">
          <div class="col p-3">
            <h2>5-Day Forecast:</h2>
          </div>
        </div>
        <div id="forecast" class="row p-3">
          <div class="col p-3">
            <div class="card bg-dark text-white">
              <div id="forecast-1" class="card-body">
              </div>
            </div>
          </div>
          <div class="col p-3">
            <div class="card bg-dark text-white">
              <div id="forecast-2" class="card-body">
              </div>
            </div>
          </div>
          <div class="col p-3">
            <div class="card bg-dark text-white">
              <div id="forecast-3" class="card-body">
              </div>
            </div>
          </div>
          <div class="col p-3">
            <div class="card bg-dark text-white">
              <div id="forecast-4" class="card-body">
              </div>
            </div>
          </div>
          <div class="col p-3">
            <div class="card bg-dark text-white">
              <div id="forecast-5" class="card-body">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
    crossorigin="anonymous"></script>
  <script src="./assets/js/script.js"></script>
</body>

</html>
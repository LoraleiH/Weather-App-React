import "./weather.css";

export default function Weather() {
  let weatherData = {
    city: "London",
    date: "Saturday",
    time: "21:36",
    description: "Light Rain",
    humidity: "73",
    windspeed: "8",
  };

  return (
    <div className="Weather">
      <div className="container">
        <div className="card">
          <div className="search-form">
            <form>
              <div className="row search-bar">
                <div className="col-6">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Enter city here..."
                  />
                </div>

                <div className="col-2">
                  <input
                    type="submit"
                    className="btn btn-secondary"
                    value="Search"
                  />
                </div>

                <div className="col-3">
                  <input
                    type="submit"
                    className="btn btn-warning"
                    value="Current Location"
                  />
                </div>
              </div>
            </form>
          </div>
          <hr />
          <h1>{weatherData.city}</h1>
          <div className="row">
            <div className="col main-forecast ">
              <ul className="forecast-details">
                <li>
                  <span>
                    {weatherData.date} {weatherData.time}
                  </span>
                </li>
                <li className="description" id="description">
                  {weatherData.description}
                </li>
                <li>
                  Humidity: <span>{weatherData.humidity}</span>%
                </li>
                <li>
                  Windspeed: <span>{weatherData.windspeed}</span> km/h
                </li>
              </ul>
            </div>
            <div className="col main-forecast">
              <div className="weather-icon">
                <img src=""  alt="the current weather" />
              </div>
              <div className="big-temp">
                <span>20</span>
                <a href="/" className="active">
                  °C
                </a>{" "}
                |<a href="/">°F</a>
              </div>
            </div>{" "}
          </div>

          <hr />

          <div className="forecast-week"></div>
        </div>
      </div>
      <br />

      <div class="credit">
        <a href="https://github.com/LoraleiH/Weather-App">Open Source Code</a>{" "}
        by Loralei Heathcote
      </div>
    </div>
  );
}

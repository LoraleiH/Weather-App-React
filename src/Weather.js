import React, { useState } from "react";
import axios from "axios";
import "./weather.css";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ready: false});
  
  function assignValues(response) {
  setWeatherData ({
    ready: true,
    city: "London",
    date: "Saturday",
    time: "21:36",
    temperature: response.data.main.temp,
    description: response.data.weather[0].description,
    humidity: response.data.main.humidity,
    windspeed: response.data.wind.speed,
    icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
  });
  }
 

  if (weatherData.ready) {

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
                  <li className="description, text-capitalize">
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
                  <img src={weatherData.icon} alt={weatherData.description} />
                </div>
                <div className="big-temp">
                  <span>{Math.round(weatherData.temperature)}</span>
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
    else {

      let apiRoot = `https://api.openweathermap.org/data/2.5/weather?q=`;
      let units = "metric";
      let appid = "b2d81bf38bb41052988aedac8aa89c4f";
      let apiUrl = `${apiRoot}${props.defaultCity}&units=${units}&appid=${appid}`;

      axios.get(apiUrl).then(assignValues);


  return (

    <h2>Loading...</h2>
  );


}
}

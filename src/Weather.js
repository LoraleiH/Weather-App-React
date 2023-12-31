import React, { useState } from "react";
import axios from "axios";
import "./weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ready: false});
  let [city, setCity] = useState(props.defaultCity);

  
  function assignValues(response) {
  setWeatherData ({
    ready: true,
    coords: response.data.coord,
    city: response.data.name,
    date: new Date(response.data.dt *1000),
    temperature: response.data.main.temp,
    description: response.data.weather[0].description,
    humidity: response.data.main.humidity,
    windspeed: response.data.wind.speed,
    icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
  });
  }

  function search() {
  let apiRoot = `https://api.openweathermap.org/data/2.5/weather?q=`;
  let units = "metric";
  let appid = "b2d81bf38bb41052988aedac8aa89c4f";
  let apiUrl = `${apiRoot}${city}&units=${units}&appid=${appid}`;

  axios.get(apiUrl).then(assignValues);

  }

  function handleSubmit(event) {
    event.preventDefault()
    search();
  }

  function handleCity(event) {
setCity(event.target.value);
  }
 

  if (weatherData.ready) {

    return (
      <div className="Weather">
        <div className="container">
          <div className="card">
            <div className="search-form">
              <form onSubmit={handleSubmit}>
                <div className="row search-bar">
                  <div className="col-8">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Enter city here..."
                      onChange={handleCity}
                    />
                  </div>

                  <div className="col-4">
                    <input
                      type="submit"
                      className="btn btn-warning"
                      value="Search"
                    />
                  </div>
                </div>
              </form>
            </div>
            <hr />
            <WeatherInfo data={weatherData} />

            <hr />
            <WeatherForecast coords={weatherData.coords}/>

          </div>
          <br />

          <div className="credit">
            <a href="https://github.com/LoraleiH/Weather-App-React">
              Open Source Code
            </a>{" "}
            by Loralei Heathcote
          </div>
        </div>
      </div>
    );
  } 
    else {

      search();


  return (

    <h2>Loading...</h2>
  );


}
}

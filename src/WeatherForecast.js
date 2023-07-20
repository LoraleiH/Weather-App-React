import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";



export default function Forecast(props) {
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);

function handleResponse(response) {
  setForecast(response.data.daily);
  setLoaded(true);
}



if (loaded) {


return (
  <div className="forecast-week">
    <div className="row">
      {forecast.map(function(dailyForecast, index) {
        if (index < 7) {
        return (
           <div className="col" key={index}>
        <WeatherForecastDay data={dailyForecast} />
      </div>);}
else {
  return (null);
}

      })}
    </div>
  </div>
);
}

else {

  let apiKey = "46fac47dd8b8fa26d1b6852218ad3dfe";
let rootUrl = "https://api.openweathermap.org/data/2.5/onecall?";
let lat = props.coords.lat;
let lon = props.coords.lon;
let units = "metric";
let apiUrl = `${rootUrl}lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
console.log(apiUrl);

axios.get(apiUrl).then(handleResponse);

  return(null);

}
}
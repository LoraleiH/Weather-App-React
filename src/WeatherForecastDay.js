import React from "react";


export default function WeatherForecastDay(props) {
let icon = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

function maxTemp() {

    let temperature = Math.round(props.data.temp.max);
    return (`${temperature}°`)
    
}

function minTemp() {
  let temperature = Math.round(props.data.temp.min);
  return `${temperature}°`;
}

function day() {
let date = new Date(props.data.dt * 1000);
let day = date.getDay();

let days = ["Sun", "Mon", "Tue", "Weds", "Thu", "Fri", "Sat"]

return days[day];

}

    return (
      <div className="weatherForecastDay">
        <div className="col" id="forecast-col">
          <div className="forecast-day">{day()}</div>
          <img
            className="forecast-icon"
            src={icon}
            alt={props.data.weather[0].description}
          />

          <div>
            <span className="high">{maxTemp()}</span>{" "}
            <span className="low">{minTemp()}</span>
          </div>
        </div>
      </div>
    );
}

 
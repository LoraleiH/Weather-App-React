import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {

return (
  <div className="WeatherInfo">
    <h1>{props.data.city}</h1>
    <div className="row">
      <div className="col main-forecast ">
        <ul className="forecast-details">
          <li>
            <span>
              <FormattedDate date={props.data.date} />
            </span>
          </li>
          <li className="description, text-capitalize">
            {props.data.description}
          </li>
          <li>
            Humidity: <span>{props.data.humidity}</span>%
          </li>
          <li>
            Windspeed: <span>{Math.round(props.data.windspeed)}</span> km/h
          </li>
        </ul>
      </div>
      <div className="col main-forecast">
        <div className="weather-icon">
          <img src={props.data.icon} alt={props.data.description} />
        </div>
        <div className="big-temp">
          <WeatherTemperature celsiusTemp={props.data.temperature} />
        </div>
      </div>{" "}
    </div>
  </div>
);

}
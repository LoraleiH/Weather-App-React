import FormattedDate from "./FormattedDate";

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
          <span>{Math.round(props.data.temperature)}</span>
          <a href="/" className="active">
            °C
          </a>{" "}
          |<a href="/">°F</a>
        </div>
      </div>{" "}
    </div>
  </div>
);

}
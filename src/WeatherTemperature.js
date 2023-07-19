import React, { useState } from "react";

export default function WeatherTemperature(props) {
let [unit, setUnit] = useState("celsius");

function convertToF (event) {
event.preventDefault();
setUnit("fahrenheit");
}
function convertToC(event) {
  event.preventDefault();
  setUnit("celsius");
}

if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span>
          {Math.round(props.celsiusTemp)} °C |{" "}
          <a href="/" onClick={convertToF}>
            °F
          </a>
        </span>
      </div>
    );}

else {
    let fahrenheit = (props.celsiusTemp * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span>
          {Math.round(fahrenheit)}
          <a href="/" onClick={convertToC}>
            {" "}
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );

}


}



export default function Forecast() {
return(
<div className="forecast-week">
              <div class="col" id="forecast-col">
                <div class="forecast-day">Monday</div>
                <img
                  class="forecast-icon"
                  src="http://openweathermap.org/img/wn/01n@2x.png"
                  alt="description"
                />

                <div>
                  <span class="high">19°</span> <span class="low">9°</span>
                </div>
              </div>
            </div>
);
}
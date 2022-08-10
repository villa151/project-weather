import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./Forecast.css";

export default function ForecastDay(props) {
  let maxTemp = Math.round(props.data.temp.max);
  let minTemp = Math.round(props.data.temp.min);
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="forecastDay">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={40} />
      <div>
        <div className="forecastMax">{maxTemp}°</div>
        <div className="forecastMin">{minTemp}°</div>
      </div>
    </div>
  );
}

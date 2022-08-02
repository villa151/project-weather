import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

import "./Forecast.css";

export default function Forecast(props) {
  function handleResponse(response) {}

  const apiKey = "8c9e2e229b27479d87f45960af4a2ad3";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="forecast">
      <div className="row">
        <div className="col">
          <div className="forecastDay">Thu</div>
          <WeatherIcon code="01d" size={100} />
          <div>
            <div className="forecastMax">Max°</div>
            <div className="forecastMin">Min°</div>
          </div>
        </div>
      </div>
    </div>
  );
}

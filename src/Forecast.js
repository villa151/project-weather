import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="forecast">
      <div className="row">
        <div className="col">
          <div className="forecastDay">Thu</div>
          <WeatherIcon code="01d" size={40} />
          <div>
            <div className="forecastMax">Max°</div>
            <div className="forecastMin">Min°</div>
          </div>
        </div>
      </div>
    </div>
  );
}

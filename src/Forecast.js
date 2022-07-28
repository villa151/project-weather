import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="row">
      <div className="col">
        <div className="forecastDay">Thu</div>
        <WeatherIcon code="01d" className="forecastIcon" />
        <div>
          <span className="forecastMax">Max</span>°
          <span className="forescastMin">Min</span>°
        </div>
      </div>
    </div>
  );
}

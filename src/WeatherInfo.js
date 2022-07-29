import React from "react";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1 className="cityResult">{props.data.city}</h1>
      <Temperature celsius={props.data.temperature} />

      <div className="row">
        <div className="col-4">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Feels like: {Math.round(props.data.feels)}°C</li>
          </ul>
        </div>
        <div className="col-3">
          <WeatherIcon code={props.data.icon} size={100} />
        </div>
        <div className="col-5">
          <ul>
            <li className="rightCol">
              Wind Speed: {Math.round(props.data.wind)}m/s
            </li>
            <li className="text-capitalize rightCol">
              {props.data.description}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

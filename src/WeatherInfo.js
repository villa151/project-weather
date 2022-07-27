import React from "react";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1 className="cityResult">{props.data.city}</h1>
      <h2 className="temperature">{Math.round(props.data.temperature)}</h2>
      <span className="unit">°C</span>
      <br />
      <div className="row">
        <div className="col-4">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Feels like: {Math.round(props.data.feels)}°C</li>
          </ul>
        </div>
        <div className="col-3">
          <img src={props.data.icon} alt={props.data.description} />
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

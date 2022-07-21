import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-warning" />
          </div>
        </div>
      </form>
      <br />
      <h3 className="date">Saturday, June 22</h3>
      <h1 className="cityResult">Isla Mujeres</h1>
      <h2>35°C</h2>
      <br />
      <div className="row">
        <div className="col-4">
          <ul>
            <li>Humidity: 80%</li>
            <li>Feels like: 40°</li>
          </ul>
        </div>
        <div className="col-4">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="cloudy"
          />
        </div>
        <div className="col-4">
          <ul>
            <li>Wind Speed: 10m/s</li>
            <li>Prescipitation: 15%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

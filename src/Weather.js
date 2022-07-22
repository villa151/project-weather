import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  function handleResponse(response) {
    console.log(response.data);
  }
  const apiKey = "8c9e2e229b27479d87f45960af4a2ad3";
  let city = "Guadalajara";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-warning w-100"
            />
          </div>
        </div>
      </form>
      <br />
      <h3 className="date">Saturday, June 22</h3>
      <h1 className="cityResult">Isla Mujeres</h1>
      <h2 className="temperature">35</h2>
      <span className="unit">°C</span>
      <br />
      <div className="row">
        <div className="col-4">
          <ul>
            <li>Humidity: 80%</li>
            <li>Feels like: 40°</li>
          </ul>
        </div>
        <div className="col-3">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="cloudy"
          />
        </div>
        <div className="col-5">
          <ul>
            <li>Wind Speed: 10m/s</li>
            <li>Prescipitation: 15%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

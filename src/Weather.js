import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    setWeatherData({
      date: "Saturday, June 22",
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      feels: response.data.main.feels_like,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    });
    setReady(true);
  }

  if (ready) {
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
        <h3 className="date">{weatherData.date}</h3>
        <h1 className="cityResult">{weatherData.city}</h1>
        <h2 className="temperature">{Math.round(weatherData.temperature)}</h2>
        <span className="unit">°C</span>
        <br />
        <div className="row">
          <div className="col-4">
            <ul>
              <li>Humidity: {weatherData.humidity}</li>
              <li>Feels like: {weatherData.feels}</li>
            </ul>
          </div>
          <div className="col-3">
            <img src={weatherData.icon} alt={weatherData.description} />
          </div>
          <div className="col-5">
            <ul>
              <li>Wind Speed: {weatherData.wind}</li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "8c9e2e229b27479d87f45960af4a2ad3";
    let city = "Guadalajara";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}

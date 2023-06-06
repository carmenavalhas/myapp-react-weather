import React, { useState } from "react";
import axios from "axios";
import { ColorRing } from  'react-loader-spinner'

import "./styles.css";


export default function SearchEngine() {
  let [weather, setWeather] = useState("");
  let [city, setCity] = useState("");

  function showWeather(response) {
    setWeather({
      name: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "bd3bb6534458ba51b48c49f5155745b6";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weather) {
    return (
      <div className="SearchEngine">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Type a city..."
            onChange={updateCity}
          />
          <input type="submit" value="search" />
        </form>
        <ul>
          <h2>Current weather in {weather.name}</h2>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li> Wind: {weather.wind} km/h</li>
          <li>Humidity: {weather.humidity}% </li>
          <li> {weather.description.toUpperCase()}</li>
          <li>
            {" "}
            <img src={weather.icon} alt={weather.description} />{" "}
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="SearchEngine">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Type a city..."
            onChange={updateCity}
          />
          <input type="submit" value="search" />
        </form>
        <div className="loaderSpinner">
        <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/></div>
      </div>
    );
  }
}

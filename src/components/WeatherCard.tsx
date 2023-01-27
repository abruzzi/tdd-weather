import { City } from "../types";
import React, { useEffect, useState } from "react";

import "./weather-card.css";
import { emptyWeather, Weather } from "../Weather";

export function WeatherCard({ city }: { city: City }) {
  const [weather, setWeather] = useState<Weather>(emptyWeather);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=91c8138e0d479b826ec6e9d617cf4c6c&units=metric`
    )
      .then((r) => r.json())
      .then((data) => setWeather(new Weather(data)));
  }, [city]);

  return (
    <div className={`weather-container ${weather.main}`}>
      <h3>{city.name}</h3>
      <div className="details">
        <p className="temperature">{weather.temperature}</p>
        <div className="weather">
          <span className="weather-category">{weather.main}</span>
        </div>
      </div>
    </div>
  );
}

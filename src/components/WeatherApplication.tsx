import React, { useState } from "react";
import "../App.css";
import { City } from "../types";
import { Search } from "./Search";
import { WeatherCard } from "./WeatherCard";

function WeatherApplication() {
  const [selected, setSelected] = useState<City[]>([]);

  const selectCity = (city: City) => {
    setSelected([city, ...selected]);
  };

  return (
    <div className="app">
      <h1>Weather Application</h1>

      <Search onSelectItem={selectCity} />

      <div data-testid="my-weather-list" className="cities-container">
        {selected.map((city) => (
          <WeatherCard key={`${city.lat}-${city.lon}`} city={city} />
        ))}
      </div>
    </div>
  );
}

export default WeatherApplication;
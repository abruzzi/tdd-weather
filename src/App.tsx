import React, { ChangeEvent, useState } from "react";
import "./App.css";

type City = {
  name: string;
  country: string;
  lat: number;
  lon: number;
}

function App() {
  const [query, setQuery] = useState<string>("");
  const [cities, setCities] = useState<City[]>([]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  function handleClick() {
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=91c8138e0d479b826ec6e9d617cf4c6c`
    )
      .then((res) => res.json())
      .then((data) => {
        setCities(data.map(({name, country, lat, lon}: any) => ({name, country, lat, lon})));
      });
  }

  return (
    <div className="app">
      <h1>Weather Application</h1>

      <div className="search-container">
        <input
          type="text"
          data-testid="search-input"
          onChange={handleChange}
          value={query}
          placeholder="Enter city name (e.g. London, Melbourne)"
        />
        <button data-testid="search-button" onClick={handleClick}>
          Search
        </button>
      </div>

      {cities.map((city) => (
        <div key={`${city.lat}${city.lon}`}>{city.name}, {city.country}</div>
      ))}
    </div>
  );
}

export default App;

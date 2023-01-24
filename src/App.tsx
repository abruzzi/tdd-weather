import React, { ChangeEvent, useState } from "react";
import "./App.css";
import { createMockServer } from "./createMockServer";

createMockServer();

function App() {
  const [query, setQuery] = useState<string>("");
  const [cities, setCities] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const performSearch = () => {
    fetch(`https://weather.service/api/cities?query=${query}`)
      .then((r) => r.json())
      .then((json) => {
        setCities(json);
      });
  };

  const selectCity = (city: string) => {
    setSelected([city, ...selected]);
    setCities([]);
  };

  return (
    <div className="app">
      <h1>Weather application</h1>

      <div className="search-container">
        <input
          type="text"
          data-testid="city-input"
          onChange={handleChange}
          placeholder="Enter city name (e.g. Melbourne, London, Tokyo)"
        />
        <button data-testid="search" onClick={performSearch}>
          Search
        </button>
      </div>

      <ul>
        {cities.map((city) => (
          <li key={city} onClick={() => selectCity(city)}>
            {city}
          </li>
        ))}
      </ul>

      <div data-testid="cities">
        {selected.map((city) => (
          <div>{city}</div>
        ))}
      </div>
    </div>
  );
}

export default App;

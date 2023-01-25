import React, { useState } from "react";
import "./App.css";
import { City } from "./types";
import { WeatherCard } from "./WeatherCard";
import { SearchBox } from "./SearchBox";

function App() {
  const [selected, setSelected] = useState<City[]>([]);

  function selectCity(city: City) {
    setSelected([city, ...selected]);
  }

  return (
    <div className="app">
      <h1>Weather Application</h1>

      <SearchBox onConfirm={selectCity} />

      <div data-testid="cities">
        {selected.map((city) => (
          <WeatherCard city={city} />
        ))}
      </div>
    </div>
  );
}

export default App;

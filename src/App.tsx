import React, { ChangeEvent, useState } from "react";
import "./App.css";

import { createServer } from "miragejs";
import data from './search-response.json';

createServer({
  routes() {
    this.urlPrefix = "https://api.openweathermap.org/geo/1.0";

    this.get("/direct", () => {
      return data;
    });
  },
});

function App() {
  const [query, setQuery] = useState<string>("");
  const [cities, setCities] = useState<string[]>([]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  function handleClick() {
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setCities(data.map((d: any) => `${d.name}, ${d.country}`));
      });
  }

  return (
    <div className="App">
      <h1>Weather Application</h1>
      <input
        type="text"
        data-testid="search-input"
        onChange={handleChange}
        value={query}
      />
      <button data-testid="search-button" onClick={handleClick}>
        Search
      </button>

      {cities.map((city) => (
        <div>{city}</div>
      ))}
    </div>
  );
}

export default App;

import React, { ChangeEvent, useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState<string>("");
  const [cities, setCities] = useState<string[]>([]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  function handleClick() {
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=91c8138e0d479b826ec6e9d617cf4c6c`
    )
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
        <div key={city}>{city}</div>
      ))}
    </div>
  );
}

export default App;

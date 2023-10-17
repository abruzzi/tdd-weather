import React, { ChangeEvent, useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleClick = () => {
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=91c8138e0d479b826ec6e9d617cf4c6c`
    )
      .then((r) => r.json())
      .then((cities) => {
        setSearchResults(
          cities.map((city: any) => ({
            name: city.name,
          }))
        );
      });
  };

  return (
    <div className="App">
      <h1>Weather Application</h1>

      <div>
        <input
          type="text"
          data-testid="search-input"
          onChange={handleChange}
          placeholder="Enter city name (e.g. Melbourne, New York)"
        />
        <button data-testid="search-button" onClick={handleClick}>
          Search
        </button>
      </div>

      {searchResults.length > 0 && (
        <ul data-testid="search-results">
          {searchResults.map((city, index) => (
            <li key={index} className="search-result">
              {city.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

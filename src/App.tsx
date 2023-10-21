import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import "./App.css";
import { SearchResultItem } from "./SearchResultItem";
import { SearchResultItemType } from "./models/SearchResultItemType";
import { RemoteCityWeather } from "./models/RemoteCityWeather";
import { CityWeather } from "./models/CityWeather";
import { useSearchCity } from "./useSearchCity";

function App() {
  const {
    fetchCities,
    setQuery,
    isDropdownOpen,
    closeDropdownList,
    searchResults,
  } = useSearchCity();

  const [city, setCity] = useState<CityWeather | undefined>(undefined);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      fetchCities();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const onItemClick = (item: SearchResultItemType) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${item.latitude}&lon=${item.longitude}&appid=91c8138e0d479b826ec6e9d617cf4c6c&units=metric`
    )
      .then((r) => r.json())
      .then((cityWeather: RemoteCityWeather) => {
        setCity(new CityWeather(cityWeather));
        closeDropdownList();
      });
  };

  return (
    <div className="app">
      <h1>Weather Application</h1>

      <div className="search-bar">
        <input
          type="text"
          data-testid="search-input"
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          placeholder="Enter city name (e.g. Melbourne, New York)"
        />
      </div>

      {isDropdownOpen && (
        <div className="search-results-popup">
          {searchResults.length > 0 && (
            <ul data-testid="search-results" className="search-results">
              {searchResults.map((item, index) => (
                <SearchResultItem
                  key={index}
                  item={item}
                  onItemClick={onItemClick}
                />
              ))}
            </ul>
          )}
        </div>
      )}

      <div data-testid="favorite-cities">
        {city && (
          <div className="city">
            <span>{city.name}</span>
            <span>{city.degree}°C</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

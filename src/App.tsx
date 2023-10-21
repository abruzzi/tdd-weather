import React from "react";
import "./App.css";
import { SearchResultItemType } from "./models/SearchResultItemType";
import { SearchCityInput } from "./SearchCityInput";
import { useFetchCityWeather } from "./useFetchCityWeather";
import { Weather } from "./Weather";

function App() {
  const { cityWeather, fetchCityWeather } = useFetchCityWeather();
  const onItemClick = (item: SearchResultItemType) => fetchCityWeather(item);

  return (
    <div className="app">
      <h1>Weather Application</h1>

      <SearchCityInput onItemClick={onItemClick} />

      <div data-testid="favorite-cities">
        <Weather cityWeather={cityWeather} />
      </div>
    </div>
  );
}

export default App;

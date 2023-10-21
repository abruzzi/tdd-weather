import React from "react";
import "./App.css";
import { SearchResultItemType } from "./models/SearchResultItemType";
import { SearchCityInput } from "./search/SearchCityInput";
import { useFetchCityWeather } from "./weather/useFetchCityWeather";
import { Weather } from "./weather/Weather";

function App() {
  const { cities, fetchCityWeather } = useFetchCityWeather();
  const onItemClick = (item: SearchResultItemType) => fetchCityWeather(item);

  return (
    <div className="app">
      <h1>Weather Application</h1>

      <SearchCityInput onItemClick={onItemClick} />

      <div data-testid="favorite-cities" className="favorite-cities">
        {cities.map((city) => (
          <Weather key={city.name} cityWeather={city} />
        ))}
      </div>
    </div>
  );
}

export default App;

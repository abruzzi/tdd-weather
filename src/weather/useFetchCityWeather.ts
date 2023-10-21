import { useState } from "react";
import { CityWeather } from "../models/CityWeather";
import { SearchResultItemType } from "../models/SearchResultItemType";
import { RemoteCityWeather } from "../models/RemoteCityWeather";

const useFetchCityWeather = () => {
  const [cities, setCities] = useState<CityWeather[]>([]);

  const fetchCityWeather = (item: SearchResultItemType) => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${item.latitude}&lon=${item.longitude}&appid=91c8138e0d479b826ec6e9d617cf4c6c&units=metric`
    )
      .then((r) => r.json())
      .then((cityWeather: RemoteCityWeather) => {
        setCities([new CityWeather(cityWeather), ...cities]);
      });
  };

  return {
    cities,
    fetchCityWeather,
  };
};

export { useFetchCityWeather };

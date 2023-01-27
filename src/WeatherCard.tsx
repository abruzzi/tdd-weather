import { City } from "./types";
import React, { useEffect, useState } from "react";

type Weather = {
  temperature: number;
  main: string;
};

export function WeatherCard({ city }: { city: City }) {
  const [weather, setWeather] = useState<Weather>();

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.name}`)
      .then((r) => r.json())
      .then((data) => setWeather({ temperature: data.main.temp, main: data.weather[0].main }));
  }, [city]);

  return (
    <div>
      <h3>{city.name}</h3>
      <p>{weather ? weather.temperature : '-/-'}</p>
      <p>{weather && weather.main}</p>
    </div>
  );
}

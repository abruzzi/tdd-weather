import { City } from "./types";
import { useEffect, useState } from "react";

type Weather = {
  temperature: number;
  main: string[];
};

export function WeatherCard({ city }: { city: City }) {
  const { name } = city;
  const [weather, setWeather] = useState<Weather>();

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=91c8138e0d479b826ec6e9d617cf4c6c&units=metric`
    )
      .then((res) => res.json())
      .then((data) =>
        setWeather({
          temperature: data.main.temp,
          main: data.weather.map((x: any) => x.main),
        })
      );
  }, [city]);

  return (
    <div>
      <h2>{name}</h2>
      <div>
        <p>{weather ? weather.temperature : "-/-"}</p>
      </div>
    </div>
  );
}

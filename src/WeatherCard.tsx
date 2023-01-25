import { City } from "./types";

export function WeatherCard({ city }: { city: City }) {
  const { name } = city;
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
}

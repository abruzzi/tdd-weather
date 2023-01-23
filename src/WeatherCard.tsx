export const WeatherCard = ({
  city,
  temperature = 0,
  weather
}: {
  city: string;
  temperature?: number;
  weather?: string;
}) => {
  return (
    <div>
      <h3>{city}</h3>
      <span>{temperature ? temperature.toFixed(1) : "N/A"}</span>
      <span>{weather}</span>
    </div>
  );
};

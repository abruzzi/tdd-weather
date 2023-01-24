import "./weather.css";

export const WeatherCard = ({
  city,
  temperature = 0,
  weather,
}: {
  city: string;
  temperature?: number;
  weather?: string;
}) => {
  return (
    <div className={`weather-container ${weather}`}>
      <h3>{city}</h3>
      <div className="details">
        <span className="temperature">
          {temperature ? temperature.toFixed(1) + "°" : "N/A"}
        </span>
        <div className="weather">
          <span className="material-symbols-outlined">cloudy</span>
          <span>{weather}</span>
        </div>
      </div>
    </div>
  );
};

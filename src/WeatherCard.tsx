import "./weather.css";

type WeatherCardType = {
  city: string;
  temperature?: number;
  weather?: string;
};
export const WeatherCard = ({
  city,
  temperature = 0,
  weather,
}: WeatherCardType) => {
  return (
    <div className={`weather-container ${weather}`}>
      <h3>{city}</h3>
      <div className="details">
        <span className="temperature">
          {temperature ? temperature.toFixed(1) + "°" : "-/-"}
        </span>
        <div className="weather">
          <span className="material-symbols-outlined">cloudy</span>
          <span className="weather-category">{weather}</span>
        </div>
      </div>
    </div>
  );
};

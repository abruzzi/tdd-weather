import React from 'react';
import './App.css';
import {WeatherCard} from "./WeatherCard";

function App() {
  return (
    <div className="app">
      <h1>Weather application</h1>
      <div className="card-container">
        <WeatherCard city="Melbourne" temperature={25.0} weather="cloud" />
        <WeatherCard city="Sydney" temperature={15.0} weather="rain" />
        <WeatherCard city="Brisbane" temperature={30.0} weather="storm" />
        <WeatherCard city="Xi'an" temperature={-5.0} weather="snow" />
      </div>
    </div>
  );
}

export default App;

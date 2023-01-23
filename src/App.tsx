import React from 'react';
import './App.css';
import {WeatherCard} from "./WeatherCard";

function App() {
  return (
    <div className="app">
      <h1>Weather application</h1>
      <WeatherCard city="Melbourne" temperature={25.0} weather="Clouds" />
    </div>
  );
}

export default App;

import {render, screen} from "@testing-library/react";

const WeatherCard = ({city, temperature = 0}: { city: string, temperature?: number }) => {
  return <div>
    <h3>{city}</h3>
    <span>{temperature ? temperature.toFixed(1): "N/A"}</span>
  </div>
};

describe('weather card', () => {
  it('renders city name', () => {
    render(<WeatherCard city="Melbourne" />);
    expect(screen.getByText("Melbourne")).toBeInTheDocument();
  })

  it('renders N/A when temperature is not available', () => {
    render(<WeatherCard city="Melbourne" />);
    expect(screen.getByText("N/A")).toBeInTheDocument();
  })

  it('renders temperature', () => {
    render(<WeatherCard city="Melbourne" temperature={25.0} />);
    expect(screen.getByText("25.0")).toBeInTheDocument();
  })
})
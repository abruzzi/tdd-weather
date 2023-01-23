import { render, screen } from "@testing-library/react";
import { WeatherCard } from "./WeatherCard";

describe("weather card", () => {
  it("renders city name", () => {
    render(<WeatherCard city="Melbourne" />);
    expect(screen.getByText("Melbourne")).toBeInTheDocument();
  });

  it("renders N/A when temperature is not available", () => {
    render(<WeatherCard city="Melbourne" />);
    expect(screen.getByText("N/A")).toBeInTheDocument();
  });

  it("renders temperature", () => {
    render(<WeatherCard city="Melbourne" temperature={25.0} />);
    expect(screen.getByText("25.0°C")).toBeInTheDocument();
  });

  it("renders weather", () => {
    render(
      <WeatherCard city="Melbourne" temperature={25.0} weather="Cloudy" />
    );
    expect(screen.getByText("Cloudy")).toBeInTheDocument();
  });

});

import { City } from "./types";
import { render, screen } from "@testing-library/react";
import { WeatherCard } from "./WeatherCard";

describe("weather card", () => {
  it("renders city name", () => {
    const city: City = {
      name: "Melbourne",
      country: "AU",
      lat: -37.8142176,
      lon: 144.9631608,
    };

    render(<WeatherCard city={city} />);

    expect(screen.getByText("Melbourne")).toBeInTheDocument();
  });
});
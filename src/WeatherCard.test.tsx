import { City } from "./types";
import {render, screen} from "@testing-library/react";
import { WeatherCard } from "./WeatherCard";
import { Server } from "miragejs";
import { createMockServer } from "./createMockServer";

describe("weather card", () => {
  let server: Server;

  beforeEach(() => (server = createMockServer()));
  afterEach(() => server.shutdown());

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

  it("renders temperature", async () => {
    const city: City = {
      name: "Melbourne",
      country: "AU",
      lat: -37.8142176,
      lon: 144.9631608,
    };

    render(<WeatherCard city={city} />);

    await screen.findByText("20.72");
  });
});

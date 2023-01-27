import React from "react";
import {render, screen, waitFor, within} from "@testing-library/react";
import WeatherApplication from "./WeatherApplication";
import { Server } from "miragejs";
import {createMockServer} from "../mock/createMockServer";
import userEvent from "@testing-library/user-event";

describe("Weather Application", () => {
  let server: Server;

  beforeEach(() => server = createMockServer());
  afterEach(() => server.shutdown());

  it("renders title", () => {
    render(<WeatherApplication />);
    const title = screen.getByText(/Weather Application/i);
    expect(title).toBeInTheDocument();
  });

  it('shows search results', async () => {
    render(<WeatherApplication />);

    const input = screen.getByTestId('search-input');
    userEvent.type(input, 'Melbourne');

    const button = screen.getByTestId('search-button');
    userEvent.click(button);

    await waitFor(() => expect(screen.getAllByText(/Melbourne/i).length).toEqual(5))
  })


  it('shows search result details', async () => {
    render(<WeatherApplication />);

    const input = screen.getByTestId('search-input');
    userEvent.type(input, 'Melbourne');

    const button = screen.getByTestId('search-button');
    userEvent.click(button);

    await waitFor(() => expect(screen.getAllByText(/Melbourne/i).length).toEqual(5))
    expect(screen.getByText(/-37.8142176, 144.9631608/i)).toBeInTheDocument();
  })

  it('adds search result to my weather list', async () => {
    render(<WeatherApplication />);

    const input = screen.getByTestId('search-input');
    userEvent.type(input, 'Melbourne');

    const button = screen.getByTestId('search-button');
    userEvent.click(button);

    await waitFor(() => expect(screen.getAllByText(/Melbourne/i).length).toEqual(5))

    const selected = screen.getAllByText(/Melbourne/i)[3];
    userEvent.click(selected);

    expect(within(screen.getByTestId('my-weather-list')).getByText(/Melbourne/i)).toBeInTheDocument();

    expect(screen.queryByTestId('search-results')).not.toBeInTheDocument();
  })


});

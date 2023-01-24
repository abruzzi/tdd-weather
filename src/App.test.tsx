import React from "react";
import {render, screen, waitFor, within} from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import {createMockServer} from "./createMockServer";
import {Server} from "miragejs/server";

let server: Server;

describe("weather application", () => {
  beforeEach(() => {
    server = createMockServer();
  })

  afterEach(() => {
    server.shutdown()
  })

  it("renders title", () => {
    render(<App />);
    const linkElement = screen.getByText(/Weather application/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("adds city to a list", async () => {
    render(<App />);

    const input = screen.getByTestId("city-input");
    userEvent.type(input, "Mel");

    const button = screen.getByTestId('search');
    userEvent.click(button);

    await waitFor(() => expect(screen.getAllByText(/Melbourne/i).length).toEqual(3));

    const mel = screen.getAllByText(/Melbourne/i)[1];
    userEvent.click(mel);

    expect(
      within(screen.getByTestId("cities")).getByText("Melbourne AU")
    ).toBeInTheDocument();
  });
});

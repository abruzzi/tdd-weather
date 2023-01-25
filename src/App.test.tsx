import React from 'react';
import {render, screen, waitFor, within} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

import {Server} from 'miragejs';
import {createMockServer} from "./createMockServer";


describe('weather application', () => {
  let server: Server;

  beforeEach(() => (server = createMockServer()));
  afterEach(() => server.shutdown());

  it('renders title', () => {
    render(<App />);
    const title = screen.getByText(/Weather Application/i);
    expect(title).toBeInTheDocument();
  });

  it('shows a list of matches when search', async () => {
    render(<App />);

    const input = screen.getByTestId('search-input');
    userEvent.type(input, 'Melbourne');

    const button = screen.getByTestId('search-button');
    userEvent.click(button);

    await waitFor(() => expect(screen.getAllByText(/Melbourne/i).length).toEqual(5));
  })

  it('adds city to list', async () => {
    render(<App />);

    const input = screen.getByTestId('search-input');
    userEvent.type(input, 'Melbourne');

    const button = screen.getByTestId('search-button');
    userEvent.click(button);

    await waitFor(() => expect(screen.getAllByText(/Melbourne/i).length).toEqual(5));

    const melbourne = screen.getAllByText(/Melbourne, AU/i)[0];
    userEvent.click(melbourne);

    expect(within(screen.getByTestId('cities')).getByText(/Melbourne/i)).toBeInTheDocument();
  })
})


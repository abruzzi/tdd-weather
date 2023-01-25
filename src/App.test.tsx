import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

describe('weather application', () => {
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
})


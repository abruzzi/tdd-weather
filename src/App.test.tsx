import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('weather application', () => {
  it('renders title', () => {
    render(<App />);
    const title = screen.getByText(/Weather Application/i);
    expect(title).toBeInTheDocument();
  });
})


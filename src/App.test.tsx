import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app text', () : void => {
  render(<App />);
  const headerElement:HTMLElement = screen.getByText(/App/i);
  expect(headerElement).toBeInTheDocument();
});

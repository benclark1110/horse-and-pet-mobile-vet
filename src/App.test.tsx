import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main sections', () => {
  render(<App />);
  expect(screen.getByText(/Meet Dr. Sage/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument();
});

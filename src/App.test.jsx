import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

test('App', () => {
  render(<App />);

  expect(screen.getByText('Restaurants')).toBeInTheDocument();
});

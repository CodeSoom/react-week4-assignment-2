import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  const renderApp = () => render(<App />);

  it('renders Restaurant title', () => {
    const { getByText } = renderApp();

    expect(getByText(/Restaurants/)).not.toBeNull();
  });
});

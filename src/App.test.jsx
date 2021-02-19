import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  const renderApp = () => render(<App />);

  const restaurant = {
    name: '베이징',
    category: '중식',
    address: '파주시',
  };

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({ restaurant }));
  });

  it('renders Restaurant title', () => {
    const { getByText } = renderApp();

    expect(getByText(/Restaurants/)).not.toBeNull();
  });
});

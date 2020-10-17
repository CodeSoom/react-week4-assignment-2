import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const restaurants = [
    {
      id: 1,
      name: '마녀주방',
      cuisine: '한식',
      location: '서울시 강남구',
    },
  ];

  const dispatch = jest.fn();

  useSelector.mockImplementation((selector) => selector(restaurants));
  useDispatch.mockReturnValue(dispatch);

  it('renders', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('Restaurants');
  });
});

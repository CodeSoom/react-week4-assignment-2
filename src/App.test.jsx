import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import restaurants from '../fixture/restaurants';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => (dispatch));
    useSelector.mockImplementation((selector) => selector(restaurants));
  });

  it('제목(Restaurants)을 보여준다.', () => {
    const { queryByText } = render(<App />);

    expect(queryByText('Restaurants')).toBeInTheDocument();
  });
});

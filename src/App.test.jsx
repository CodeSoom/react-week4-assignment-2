import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');

const restaurants = [{
  id: 1,
  name: '라이브볼',
  category: '샐러드',
  address: '서울시 신논현동',
}];

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurants: [],
      restaurant: {},
    }));
  });

  it('renders title', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('Restaurants');
  });

  it('renders restaurant name', () => {
    const { queryByText } = render(<App />);

    expect(dispatch).toBeCalledWith({
      type: 'setRestaurants',
      payload: { restaurants: [] },
    });

    expect(queryByText('라이브볼')).toBeNull();
  });
});

import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      {
        id: 1,
        name: '마녀주방',
        type: '한식',
        address: '서울시 강남구',
      },
      {
        id: 2,
        name: '시카고피자',
        type: '양식',
        address: '이태원역',
      },
    ],
  }));

  it('renders title', () => {
    const { getByText } = render(<App />);

    expect(getByText(/Restaurants/)).not.toBeNull();
  });
});

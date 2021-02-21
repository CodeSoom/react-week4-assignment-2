import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurant: {
        name: '',
        category: '',
        address: '',
      },
    }));
  });

  it('renders title', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('Restaurants');
  });

  it('renders restaurant name', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('자매수산');
  });
});

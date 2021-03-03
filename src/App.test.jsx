import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');

beforeEach(() => {
  jest.clearAllMocks();

  useSelector.mockImplementation((selector) => selector({
    id: 0,
    name: '',
    category: '',
    address: '',
    restaurants: [],
  }));

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
});

describe('App', () => {
  it('renders title', () => {
    const { getByText } = render((
      <App />
    ));

    expect(getByText(/Restaurants/)).not.toBeNull();
  });

  it('renders restaurant inputs', () => {
    const { getByPlaceholderText } = render((
      <App />
    ));

    expect(getByPlaceholderText(/이름/)).not.toBeNull();
    expect(getByPlaceholderText(/분류/)).not.toBeNull();
    expect(getByPlaceholderText(/주소/)).not.toBeNull();
  });
});

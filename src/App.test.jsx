import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import App from './App';
import { changeRestaurant, saveNewRestaurant } from './actions';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    newRestaurant: {
      name: '김밥헤븐',
      category: '분식',
      address: '강남',
    },
    restaurants: [],
  }));

  it('renders title', () => {
    const { getByText } = render((
      <App />
    ));
    expect(getByText(/Restaurants/)).not.toBeNull();
  });

  context('when name is changed', () => {
    it('occurs changeRestaurants action', () => {
      const name = '깐부치킨';
      const { getByPlaceholderText } = render((
        <App />
      ));

      fireEvent.change(getByPlaceholderText(/이름/), { target: { value: name } });
      expect(dispatch).toBeCalledWith(changeRestaurant('name', name));
    });
  });

  context('when category is changed', () => {
    it('occurs changeRestaurants action', () => {
      const category = '치킨';
      const { getByPlaceholderText } = render((
        <App />
      ));

      fireEvent.change(getByPlaceholderText(/분류/), { target: { value: category } });
      expect(dispatch).toBeCalledWith(changeRestaurant('category', category));
    });
  });

  context('when address is changed', () => {
    it('occurs changeRestaurants action', () => {
      const address = '용인수지';
      const { getByPlaceholderText } = render((
        <App />
      ));

      fireEvent.change(getByPlaceholderText(/주소/), { target: { value: address } });
      expect(dispatch).toBeCalledWith(changeRestaurant('address', address));
    });
  });

  context('when submit button is clicked', () => {
    it('occurs saveNewRestaurants', () => {
      const { getByText } = render((
        <App />
      ));
      fireEvent.click(getByText(/등록/));
      expect(dispatch).toBeCalledWith(saveNewRestaurant());
    });
  });
});

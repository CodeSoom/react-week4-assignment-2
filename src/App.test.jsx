import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import {
  updateRestaurantName, updateRestaurantCategory, updateRestaurantAddress, addRestaurant,
} from './stores/action/action-creators';

import RESTAURANTS from './__fixtures__/restaurants.json';

import App from './App';

jest.mock('react-redux');

function renderComponent() {
  return render(<App />);
}

describe('<App />', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  context('without restaurants', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurants: [],
        restaurant: {},
      }));
    });

    it('display empty restaurants', () => {
      const { container, getByRole } = renderComponent();

      expect(container).toHaveTextContent('Restaurants');
      expect(container).toHaveTextContent('등록');

      const restaurantList = getByRole('list');
      expect(restaurantList.children).toHaveLength(0);
    });

    it('input restaurant-info', () => {
      const { getAllByRole } = renderComponent();

      const inputBoxes = getAllByRole('textbox');
      expect(inputBoxes).toHaveLength(3);

      const newRestaurant = RESTAURANTS[0];

      const [nameInputBox, categoryInputBox, addressInputBox] = inputBoxes;

      fireEvent.change(nameInputBox, { target: { value: newRestaurant.name } });
      expect(nameInputBox.value).toBe(newRestaurant.name);
      expect(dispatch).toBeCalledWith(updateRestaurantName(newRestaurant.name));

      fireEvent.change(categoryInputBox, { target: { value: newRestaurant.category } });
      expect(categoryInputBox.value).toBe(newRestaurant.category);
      expect(dispatch).toBeCalledWith(updateRestaurantCategory(newRestaurant.category));

      fireEvent.change(addressInputBox, { target: { value: newRestaurant.address } });
      expect(addressInputBox.value).toBe(newRestaurant.address);
      expect(dispatch).toBeCalledWith(updateRestaurantAddress(newRestaurant.address));
    });

    it('add new restaurant', () => {
      const { getAllByRole, getByRole } = renderComponent();

      const newRestaurant = RESTAURANTS[0];

      const inputBoxes = getAllByRole('textbox');
      const [nameInputBox, categoryInputBox, addressInputBox] = inputBoxes;
      fireEvent.change(nameInputBox, { target: { value: newRestaurant.name } });
      fireEvent.change(categoryInputBox, { target: { value: newRestaurant.category } });
      fireEvent.change(addressInputBox, { target: { value: newRestaurant.address } });

      const button = getByRole('button');
      fireEvent.click(button);
      expect(dispatch).toBeCalledWith(addRestaurant());
    });
  });

  context('with restaurants', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurants: RESTAURANTS,
        restaurant: {},
      }));
    });

    it('display restaurants', () => {
      const { getAllByRole, getByRole } = renderComponent();

      const restaurantList = getByRole('list');
      expect(restaurantList.children).toHaveLength(RESTAURANTS.length);

      const restaurantListItems = getAllByRole('listitem');
      expect(restaurantListItems).toHaveLength(RESTAURANTS.length);
    });
  });
});

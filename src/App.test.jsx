import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import RESTAURANTS from './__fixtures__/restaurants.json';

import App from './App';

function renderComponent() {
  return render(<App />);
}

describe('<App />', () => {
  context('without restaurants', () => {
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

      fireEvent.change(categoryInputBox, { target: { value: newRestaurant.category } });
      expect(categoryInputBox.value).toBe(newRestaurant.category);

      fireEvent.change(addressInputBox, { target: { value: newRestaurant.address } });
      expect(addressInputBox.value).toBe(newRestaurant.address);
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

      expect(nameInputBox.value).toBe('');
      expect(categoryInputBox.value).toBe('');
      expect(addressInputBox.value).toBe('');
    });
  });

  context('with restaurants', () => {
    it('display restaurants', () => {
      const { getAllByRole, getByRole } = renderComponent();

      const inputBoxes = getAllByRole('textbox');
      const button = getByRole('button');

      const [nameInputBox, categoryInputBox, addressInputBox] = inputBoxes;
      RESTAURANTS.forEach(({ name, category, address }) => {
        fireEvent.change(nameInputBox, { target: { value: name } });
        fireEvent.change(categoryInputBox, { target: { value: category } });
        fireEvent.change(addressInputBox, { target: { value: address } });
        fireEvent.click(button);
      });

      const restaurantList = getByRole('list');
      expect(restaurantList.children).toHaveLength(3);

      const restaurantListItems = getAllByRole('listitem');
      expect(restaurantListItems).toHaveLength(3);
    });
  });
});

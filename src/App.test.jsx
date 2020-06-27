import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import App from './App';

function renderApp() {
  render(<App />);
  return {
    heading: screen.getByText(/Restaurants/),
    nameInput: screen.getByPlaceholderText(/이름/),
    categoryInput: screen.getByPlaceholderText(/분류/),
    addressInput: screen.getByPlaceholderText(/주소/),
    registerButton: screen.getByRole('button', { name: /등록/ }),
  };
}

describe('<App />', () => {
  context('when initialized', () => {
    it('renders title', () => {
      // when
      const { heading } = renderApp();
      // then
      expect(heading).toBeInTheDocument();
    });

    it('renders input boxes', () => {
      // when
      const { nameInput, categoryInput, addressInput } = renderApp();
      // then
      expect(nameInput).toBeInTheDocument();
      expect(categoryInput).toBeInTheDocument();
      expect(addressInput).toBeInTheDocument();
    });

    it('renders register button', () => {
      // when
      const { registerButton } = renderApp();
      // then
      expect(registerButton).toBeInTheDocument();
    });
  });

  describe('register restaurant', () => {
    context('when entering restaurant information', () => {
      it('renders the entered value', () => {
        // given
        const restaurant = {
          name: '시카고피자',
          category: '양식',
          address: '이태원동',
        };
        // when
        const { nameInput, categoryInput, addressInput } = renderApp();
        fireEvent.change(nameInput, { target: { value: restaurant.name } });
        fireEvent.change(categoryInput, { target: { value: restaurant.category } });
        fireEvent.change(addressInput, { target: { value: restaurant.address } });
        // then
        expect(nameInput.value).toBe(restaurant.name);
        expect(categoryInput.value).toBe(restaurant.category);
        expect(addressInput.value).toBe(restaurant.address);
      });
    });

    context('When the registration button is clicked', () => {
      it('restaurants is added to the list', () => {
        // given
        const restaurants = [{
          name: '시카고피자',
          category: '양식',
          address: '이태원동',
        },
        {
          name: '마녀주방',
          category: '한식',
          address: '서울시 강남구',
        }];
        // when
        const {
          nameInput, categoryInput, addressInput, registerButton,
        } = renderApp();

        restaurants.forEach((restaurant) => {
          fireEvent.change(nameInput, { target: { value: restaurant.name } });
          fireEvent.change(categoryInput, { target: { value: restaurant.category } });
          fireEvent.change(addressInput, { target: { value: restaurant.address } });
          fireEvent.click(registerButton);
        });

        // then
        const restaurantListItems = screen.getAllByRole('listitem');
        expect(restaurantListItems).toHaveLength(2);
        restaurants.forEach((restaurant) => {
          expect(screen.getByText(`${restaurant.name} | ${restaurant.category} | ${restaurant.address}`));
        });
      });

      it('the entered values are erased', () => {
        // given
        const restaurant = {
          name: '시카고피자',
          category: '양식',
          address: '이태원동',
        };
        // when
        const {
          nameInput, categoryInput, addressInput, registerButton,
        } = renderApp();
        fireEvent.change(nameInput, { target: { value: restaurant.name } });
        fireEvent.change(categoryInput, { target: { value: restaurant.category } });
        fireEvent.change(addressInput, { target: { value: restaurant.address } });
        fireEvent.click(registerButton);
        // then
        expect(nameInput.value).toBe('');
        expect(categoryInput.value).toBe('');
        expect(addressInput.value).toBe('');
      });
    });
  });
});

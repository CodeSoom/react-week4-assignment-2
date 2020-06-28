import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import restaurants from '../__fixtures__/restaurants';

import FormContainer from './FormContainer';

jest.mock('react-redux');

function renderFormContainer() {
  render(<FormContainer />);

  return {
    nameInput: screen.getByPlaceholderText(/이름/),
    categoryInput: screen.getByPlaceholderText(/분류/),
    addressInput: screen.getByPlaceholderText(/주소/),
    registerButton: screen.getByRole('button', { name: /등록/ }),
  };
}

function enterRestaurantInformation(
  { nameInput, categoryInput, addressInput },
  { name, category, address },
) {
  fireEvent.change(nameInput, { target: { value: name } });
  fireEvent.change(categoryInput, { target: { value: category } });
  fireEvent.change(addressInput, { target: { value: address } });
}

describe('<FormContainer />', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      input: {
        name: '',
        category: '',
        address: '',
      },
    }));
  });

  context('when initialized', () => {
    it('renders input boxes', () => {
      // when
      const { nameInput, categoryInput, addressInput } = renderFormContainer();

      // then
      expect(nameInput).toBeInTheDocument();
      expect(categoryInput).toBeInTheDocument();
      expect(addressInput).toBeInTheDocument();
    });

    it('renders register button', () => {
      // when
      const { registerButton } = renderFormContainer();

      // then
      expect(registerButton).toBeInTheDocument();
    });
  });

  describe('register restaurant', () => {
    context('when entering restaurant information', () => {
      it('renders the entered value', () => {
        // given
        const restaurant = restaurants[0];

        // when
        const { nameInput, categoryInput, addressInput } = renderFormContainer();
        enterRestaurantInformation({ nameInput, categoryInput, addressInput }, restaurant);

        // then
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toBeCalledWith({
          type: 'updateInput',
          payload: { name: 'name', value: restaurant.name },
        });
        expect(dispatch).toBeCalledWith({
          type: 'updateInput',
          payload: { name: 'category', value: restaurant.category },
        });
        expect(dispatch).toBeCalledWith({
          type: 'updateInput',
          payload: { name: 'address', value: restaurant.address },
        });
      });
    });

    context('When the registration button is clicked', () => {
      it('add restaurant to the list', () => {
        // when
        const {
          nameInput, categoryInput, addressInput, registerButton,
        } = renderFormContainer();

        restaurants.forEach((restaurant) => {
          enterRestaurantInformation({ nameInput, categoryInput, addressInput }, restaurant);
          fireEvent.click(registerButton);
        });

        // then
        restaurants.forEach(() => {
          expect(dispatch).toBeCalledWith({
            type: 'registerRestaurant',
            payload: {},
          });
        });
      });
    });
  });
});

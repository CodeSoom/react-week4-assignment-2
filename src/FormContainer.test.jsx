import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

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
    // given
    const inputValues = [{
      name: '시카고피자',
      category: '양식',
      address: '이태원동',
    },
    {
      name: '마녀주방',
      category: '한식',
      address: '서울시 강남구',
    }];

    context('when entering restaurant information', () => {
      it('renders the entered value', () => {
        // given
        const restaurant = inputValues[0];

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

        inputValues.forEach((restaurant) => {
          enterRestaurantInformation({ nameInput, categoryInput, addressInput }, restaurant);
          fireEvent.click(registerButton);
        });

        // then
        inputValues.forEach(() => {
          expect(dispatch).toBeCalledWith({
            type: 'registerRestaurant',
            payload: {},
          });
        });
      });
    });
  });
});

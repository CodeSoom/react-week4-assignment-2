import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

const { click } = fireEvent;

function change(target, { value }) {
  fireEvent.change(target, {
    target: { value },
  });
}

describe('InputContainer', () => {
  function renderInputContainer() {
    const { container, getByText, getByTitle } = render(<InputContainer />);

    return {
      container,
      inputName: getByTitle(/이름/),
      inputCuisine: getByTitle(/분류/),
      inputLocation: getByTitle(/주소/),
      buttonAdd: getByText(/등록/),
    };
  }

  const restaurants = [
    {
      id: 1,
      name: '마녀주방',
      cuisine: '한식',
      location: '서울시 강남구',
    },
  ];

  const dispatch = jest.fn();

  useSelector.mockImplementation((selector) => selector(restaurants));
  useDispatch.mockReturnValue(dispatch);

  it('calls changeName', () => {
    const {
      inputName,
    } = renderInputContainer();

    const restaurant = {
      name: '시카고피자',
      cuisine: '양식',
      location: '이태원동',
    };

    change(inputName, { value: restaurant.name });
    expect(dispatch).toBeCalledWith({
      type: 'changeName',
      payload: { name: restaurant.name },
    });
  });

  it('calls changeCuisine', () => {
    const {
      inputCuisine,
    } = renderInputContainer();

    const restaurant = {
      name: '시카고피자',
      cuisine: '양식',
      location: '이태원동',
    };

    change(inputCuisine, { value: restaurant.cuisine });
    expect(dispatch).toBeCalledWith({
      type: 'changeCuisine',
      payload: { cuisine: restaurant.cuisine },
    });
  });

  it('calls changeLocation', () => {
    const {
      inputLocation,
    } = renderInputContainer();

    const restaurant = {
      name: '시카고피자',
      cuisine: '양식',
      location: '이태원동',
    };

    change(inputLocation, { value: restaurant.location });
    expect(dispatch).toBeCalledWith({
      type: 'changeLocation',
      payload: { location: restaurant.location },
    });
  });

  it('calls clickAddRestaurant', () => {
    const {
      buttonAdd,
    } = renderInputContainer();

    expect(buttonAdd).not.toBeNull();

    click(buttonAdd);
    expect(dispatch).toBeCalledWith({
      type: 'clickAddRestaurant',
    });
  });
});

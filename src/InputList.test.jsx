import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import InputList from './InputList';

describe('InputList', () => {
  const handleChangeName = jest.fn();
  const handleClick = jest.fn();

  const handleChange = () => handleChangeName;

  const renderInputList = (restaurant) => render((
    <InputList
      restaurant={restaurant}
      onChange={handleChange}
      onClick={handleClick}
    />
  ));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const restaurant = {
    name: '키와미',
    category: '일식',
    address: '분당구 정자동',
  };

  it('renders elements', () => {
    const { getByDisplayValue, getByText } = renderInputList(restaurant);

    expect(getByDisplayValue(restaurant.name)).toBeInTheDocument();
    expect(getByDisplayValue(restaurant.category)).toBeInTheDocument();
    expect(getByDisplayValue(restaurant.address)).toBeInTheDocument();
    expect(getByText(/등록/));
  });

  it('calls change handler when one of fields change', () => {
    const { getByDisplayValue } = renderInputList(restaurant);

    const nameInput = getByDisplayValue(restaurant.name);

    expect(handleChangeName).not.toBeCalled();

    fireEvent.change(nameInput, {
      target: {
        value: 'something',
      },
    });

    expect(handleChangeName).toBeCalledTimes(1);
  });

  it('calls click handler when button is clicked', () => {
    const { getByText } = renderInputList(restaurant);

    const button = getByText(/등록/);

    expect(handleClick).not.toBeCalled();

    fireEvent.click(button);

    expect(handleClick).toBeCalledTimes(1);
  });

  it('cannot call click handler when one of input is blank', () => {
    const blankRestaurant = {
      name: '',
      category: '일식',
      address: '서울',
    };

    const { getByText } = renderInputList(blankRestaurant);

    const button = getByText(/등록/);

    expect(handleClick).not.toBeCalled();

    fireEvent.click(button);

    expect(handleClick).not.toBeCalled();
  });
});

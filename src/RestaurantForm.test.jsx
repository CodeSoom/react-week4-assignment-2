import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Form from './RestaurantForm';

describe('Form', () => {
  const handleChangeRestaurant = jest.fn();
  const handleClickAddRestaurant = jest.fn();

  const getHandleChangeRestaurant = () => handleChangeRestaurant;

  const renderForm = (restaurant) => render((
    <Form
      restaurant={restaurant}
      getOnChangeRestaurant={getHandleChangeRestaurant}
      onClickAddRestaurant={handleClickAddRestaurant}
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
    const { getByDisplayValue, getByText } = renderForm(restaurant);

    expect(getByDisplayValue(restaurant.name)).toBeInTheDocument();
    expect(getByDisplayValue(restaurant.category)).toBeInTheDocument();
    expect(getByDisplayValue(restaurant.address)).toBeInTheDocument();
    expect(getByText(/등록/));
  });

  it('calls change handler when one of fields change', () => {
    const { getByDisplayValue } = renderForm(restaurant);

    const nameInput = getByDisplayValue(restaurant.name);

    expect(handleChangeRestaurant).not.toBeCalled();

    fireEvent.change(nameInput, {
      target: {
        value: 'something',
      },
    });

    expect(handleChangeRestaurant).toBeCalledTimes(1);
  });

  it('calls click handler when button is clicked', () => {
    const { getByText } = renderForm(restaurant);

    const button = getByText(/등록/);

    expect(handleClickAddRestaurant).not.toBeCalled();

    fireEvent.click(button);

    expect(handleClickAddRestaurant).toBeCalledTimes(1);
  });

  it('cannot call click handler when one of input is blank', () => {
    const blankRestaurant = {
      name: '',
      category: '일식',
      address: '서울',
    };

    const { getByText } = renderForm(blankRestaurant);

    const button = getByText(/등록/);

    expect(handleClickAddRestaurant).not.toBeCalled();

    fireEvent.click(button);

    expect(handleClickAddRestaurant).not.toBeCalled();
  });
});

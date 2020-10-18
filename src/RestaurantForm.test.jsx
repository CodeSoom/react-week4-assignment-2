import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import RestaurantForm from './RestaurantForm';

describe('Form', () => {
  const handleChangeRestaurantField = jest.fn();
  const handleClickAddRestaurant = jest.fn();

  const renderRestaurantForm = (restaurant) => render((
    <RestaurantForm
      restaurant={restaurant}
      onChangeRestaurantField={handleChangeRestaurantField}
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
    const { getByDisplayValue, getByText } = renderRestaurantForm(restaurant);

    expect(getByDisplayValue(restaurant.name)).toBeInTheDocument();
    expect(getByDisplayValue(restaurant.category)).toBeInTheDocument();
    expect(getByDisplayValue(restaurant.address)).toBeInTheDocument();
    expect(getByText(/등록/));
  });

  it('calls change handler when one of fields change', () => {
    const { getByDisplayValue } = renderRestaurantForm(restaurant);

    const nameInput = getByDisplayValue(restaurant.name);

    expect(handleChangeRestaurantField).not.toBeCalled();

    fireEvent.change(nameInput, {
      target: {
        name: 'name',
        value: 'something',
      },
    });

    expect(handleChangeRestaurantField).toBeCalledTimes(1);
  });

  it('calls click handler when button is clicked', () => {
    const { getByText } = renderRestaurantForm(restaurant);

    const button = getByText(/등록/);

    expect(handleClickAddRestaurant).not.toBeCalled();

    fireEvent.click(button);

    expect(handleClickAddRestaurant).toBeCalledTimes(1);
  });

  it('cannot call click handler when one of input is blank', () => {
    const { getByText } = renderRestaurantForm({
      name: '',
      category: 'not blank',
      address: 'not blank',
    });

    const button = getByText(/등록/);

    expect(handleClickAddRestaurant).not.toBeCalled();

    fireEvent.click(button);

    expect(handleClickAddRestaurant).not.toBeCalled();
  });
});

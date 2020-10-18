import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import RestaurantForm from './RestaurantForm';

describe('Item', () => {
  const restaurant = {
    name: '',
    category: '',
    address: '',
  };

  const handleChangeName = jest.fn();
  const handleChangeCategory = jest.fn();
  const handleChangeAddress = jest.fn();
  const handleClickAddRestaurant = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderRestaurantForm() {
    return render((
      <RestaurantForm
        form={restaurant}
        onChangeName={handleChangeName}
        onChangeCategory={handleChangeCategory}
        onChangeAddress={handleChangeAddress}
        onClick={handleClickAddRestaurant}
      />
    ));
  }

  it('chages a new name', () => {
    const { getByPlaceholderText } = renderRestaurantForm();

    expect(handleChangeName).not.toBeCalled();

    fireEvent.change(getByPlaceholderText('이름'));

    expect(handleChangeName).not.toBeCalled();
  });

  it('chages a new category', () => {
    const { getByPlaceholderText } = renderRestaurantForm();

    expect(handleChangeCategory).not.toBeCalled();

    fireEvent.change(getByPlaceholderText('분류'));

    expect(handleChangeCategory).not.toBeCalled();
  });

  it('chages a new address', () => {
    const { getByPlaceholderText } = renderRestaurantForm();

    expect(handleChangeAddress).not.toBeCalled();

    fireEvent.change(getByPlaceholderText('주소'));

    expect(handleChangeAddress).not.toBeCalled();
  });

  it('clicks add button', () => {
    const { getByText } = renderRestaurantForm();

    expect(handleClickAddRestaurant).not.toBeCalled();

    fireEvent.click(getByText('등록'));

    expect(handleClickAddRestaurant).toBeCalledWith(1);
  });
});

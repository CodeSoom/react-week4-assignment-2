import React from 'react';

import { render, fireEvent, getAllByPlaceholderText } from '@testing-library/react';

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

  const { getByPlaceholderText, getByText } = render((
    <RestaurantForm
      form={restaurant}
      onChangeName={handleChangeName}
      onChangeCategory={handleChangeCategory}
      onChangeAddress={handleChangeAddress}
      onClickDelete={handleClickAddRestaurant}
    />
  ));

  expect(getByPlaceholderText('이름')).not.toBeNull();
  expect(getByPlaceholderText('분류')).not.toBeNull();
  expect(getByPlaceholderText('주소')).not.toBeNull();

  it('chages a new name', () => {
    expect(handleChangeName).not.toBeCalled();

    fireEvent.change(getByPlaceholderText('이름'));

    expect(handleChangeName).not.toBeCalled();
  });

  it('chages a new category', () => {
    expect(handleChangeCategory).not.toBeCalled();

    fireEvent.change(getByPlaceholderText('분류'));

    expect(handleChangeCategory).not.toBeCalled();
  });

  it('chages a new address', () => {
    expect(handleChangeAddress).not.toBeCalled();

    fireEvent.change(getByPlaceholderText('주소'));

    expect(handleChangeAddress).not.toBeCalled();
  });

  it('clicks add button', () => {
    expect(handleClickAddRestaurant).not.toBeCalled();

    fireEvent.click(getByText('완료'));

    expect(handleClickAddRestaurant).toBeCalledWith(1);
  });
});

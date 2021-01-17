import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import RestaurantForm from './RestaurantForm';

describe('RestaurantForm', () => {
  const handleChangeName = jest.fn();
  const handleChangeCategory = jest.fn();
  const handleChangeAddress = jest.fn();
  const handleClickAddRestaurant = jest.fn();

  const renderRestaurantForm = (restaurant = { name: '', category: '', address: '' }) => render((
    <RestaurantForm
      form={restaurant}
      onChangeName={handleChangeName}
      onChangeCategory={handleChangeCategory}
      onChangeAddress={handleChangeAddress}
      onClick={handleClickAddRestaurant}
    />
  ));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('chages a new name', () => {
    const { getByPlaceholderText } = renderRestaurantForm();

    expect(handleChangeName).not.toBeCalled();

    fireEvent.change(getByPlaceholderText('이름'), {
      target: {
        value: '마녀주방',
      },
    });

    expect(handleChangeName).toBeCalled();
  });

  it('chages a new category', () => {
    const { getByPlaceholderText } = renderRestaurantForm();

    expect(handleChangeCategory).not.toBeCalled();

    fireEvent.change(getByPlaceholderText('분류'), {
      target: {
        value: '양식',
      },
    });

    expect(handleChangeCategory).toBeCalled();
  });

  it('chages a new address', () => {
    const { getByPlaceholderText } = renderRestaurantForm();

    expect(handleChangeAddress).not.toBeCalled();

    fireEvent.change(getByPlaceholderText('주소'), {
      target: {
        value: '강남구 서현동',
      },
    });

    expect(handleChangeAddress).toBeCalled();
  });

  it('clicks add button', () => {
    const { getByText } = renderRestaurantForm();

    expect(handleClickAddRestaurant).not.toBeCalled();

    fireEvent.click(getByText('등록'));

    expect(handleClickAddRestaurant).toBeCalled();
  });
});

import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import RestaurantForm from './RestaurantForm';

describe('RestaurantForm', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  const restaurant = {
    name: '베이징',
    category: '중식',
    address: '파주시',
  };

  const restaurantData = Object.values(restaurant);

  const renderRestaurantForm = () => render((
    <RestaurantForm
      restaurant={restaurant}
      handleChange={handleChange}
      handleClick={handleClick}
    />
  ));

  beforeEach(() => jest.clearAllMocks());

  it('renders input elemetns', () => {
    const { getByPlaceholderText } = renderRestaurantForm();

    const inputNameNode = getByPlaceholderText('이름');
    const inputCategoryNode = getByPlaceholderText('분류');
    const inputAddressNode = getByPlaceholderText('주소');

    expect(inputNameNode).not.toBeNull();
    expect(inputCategoryNode).not.toBeNull();
    expect(inputAddressNode).not.toBeNull();
  });

  it('renders 등록 button', () => {
    const { getByText } = renderRestaurantForm();

    expect(getByText(/등록/)).not.toBeNull();
  });

  it('renders values of the input elements ', () => {
    const { getByDisplayValue } = renderRestaurantForm();

    restaurantData.forEach((data) => {
      expect(getByDisplayValue(data)).not.toBeNull();
    });
  });

  it('calls handleChange function upon changing value of the input elements', () => {
    const { getByDisplayValue } = renderRestaurantForm();

    restaurantData.forEach((data) => {
      fireEvent.change(getByDisplayValue(data), {
        target: { value: '본즈패밀리' },
      });
    });

    expect(handleChange).toBeCalled();
  });

  it('calls handleClick function upon clicking 등록 button', () => {
    const { getByText } = renderRestaurantForm();

    fireEvent.click(getByText(/등록/));

    expect(handleClick).toBeCalled();
  });
});

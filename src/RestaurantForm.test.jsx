import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import RestaurantForm from './RestaurantForm';

describe('RestaurantForm', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  const restaurantInformation = {
    name: '베이징',
    category: '중식',
    address: '파주시',
  };

  const informations = Object.values(restaurantInformation);

  const renderRestaurantForm = () => render((
    <RestaurantForm
      restaurantInformation={restaurantInformation}
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

    informations.forEach((information) => {
      expect(getByDisplayValue(information)).not.toBeNull();
    });
  });

  it('calls handleChange function upon changing value of the input elements', () => {
    const { getByDisplayValue } = renderRestaurantForm();

    informations.forEach((information) => {
      fireEvent.change(getByDisplayValue(information), {
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

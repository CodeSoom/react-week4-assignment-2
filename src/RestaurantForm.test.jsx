import React from 'react';

import { render } from '@testing-library/react';

import RestaurantForm from './RestaurantForm';

describe('RestaurantForm', () => {
  const renderRestaurantForm = (restaurantInformation) => render((
    <RestaurantForm
      restaurantInformation={restaurantInformation}
    />
  ));

  const restaurantInformation = {
    name: '베이징',
    category: '중식',
    address: '파주시',
  };

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
    const { getByDisplayValue } = renderRestaurantForm(restaurantInformation);

    const informations = Object.values(restaurantInformation);

    informations.forEach((information) => {
      expect(getByDisplayValue(information)).not.toBeNull();
    });
  });
});

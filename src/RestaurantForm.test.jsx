import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import RestaurantForm from './RestaurantForm';

describe('RestaurantForm', () => {
  const onChange = jest.fn();

  const initRestaurant = {
    name: '',
    category: '',
    address: '',
  };

  function renderRestaurantForm({ restaurant = initRestaurant }) {
    return render((
      <RestaurantForm
        restaurant={restaurant}
        onChange={onChange}
      />
    ));
  }

  it('input, button을 보여준다.', () => {
    const { queryByText, getByPlaceholderText } = renderRestaurantForm({});

    expect(getByPlaceholderText(/이름/)).not.toBeNull();
    expect(getByPlaceholderText(/분류/)).not.toBeNull();
    expect(getByPlaceholderText(/주소/)).not.toBeNull();

    expect(queryByText(/등록/)).not.toBeNull();
  });

  it('값을 변경하면, 상태값이 변경된다.', () => {
    const { getByPlaceholderText } = renderRestaurantForm({});

    const input = getByPlaceholderText('이름');

    fireEvent.change(input, {
      target: {
        value: '인풋 작성',
      },
    });

    expect(onChange).toBeCalled();

    expect(input.value).toBe('인풋 작성');
  });
});

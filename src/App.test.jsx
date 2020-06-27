import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import App from './App';

describe('App', () => {
  test('handleChangeRestaurant', () => {
    const restaurant = {
      name: '서브웨이',
      category: '양식',
      address: '서울시 도봉구',
    };
    const { getByPlaceholderText } = render(
      <App />,
    );

    fireEvent.change(
      getByPlaceholderText('이름'),
      { target: { value: restaurant.name } },
    );
    fireEvent.change(
      getByPlaceholderText('분류'),
      { target: { value: restaurant.category } },
    );
    fireEvent.change(
      getByPlaceholderText('주소'),
      { target: { value: restaurant.address } },
    );

    expect(getByPlaceholderText('이름')).toHaveAttribute('value', restaurant.name);
    expect(getByPlaceholderText('분류')).toHaveAttribute('value', restaurant.category);
    expect(getByPlaceholderText('주소')).toHaveAttribute('value', restaurant.address);
  });

  test('handleClickRegisterReservation', () => {
    const restaurant = {
      name: '서브웨이',
      category: '양식',
      address: '서울시 도봉구',
    };
    const { container, getByPlaceholderText, getByText } = render(
      <App />,
    );

    fireEvent.change(
      getByPlaceholderText('이름'),
      { target: { value: restaurant.name } },
    );
    fireEvent.change(
      getByPlaceholderText('분류'),
      { target: { value: restaurant.category } },
    );
    fireEvent.change(
      getByPlaceholderText('주소'),
      { target: { value: restaurant.address } },
    );

    expect(getByPlaceholderText('이름')).toHaveAttribute('value', restaurant.name);
    expect(getByPlaceholderText('분류')).toHaveAttribute('value', restaurant.category);
    expect(getByPlaceholderText('주소')).toHaveAttribute('value', restaurant.address);

    fireEvent.click(getByText('등록'));

    expect(getByPlaceholderText('이름')).toHaveAttribute('value', '');
    expect(getByPlaceholderText('분류')).toHaveAttribute('value', '');
    expect(getByPlaceholderText('주소')).toHaveAttribute('value', '');

    expect(container).toHaveTextContent('서브웨이|양식|서울시 도봉구');
  });
});

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
    const { getByLabelText } = render(
      <App />
    );

    fireEvent.change(
      getByLabelText('이름'),
      { target: { value: restaurant.name } },
    );
    fireEvent.change(
      getByLabelText('분류'),
      { target: { value: restaurant.category } },
    );
    fireEvent.change(
      getByLabelText('주소'),
      { target: { value: restaurant.address } },
    );

    expect(getByLabelText('이름')).toHaveAttribute('value', restaurant.name);
    expect(getByLabelText('분류')).toHaveAttribute('value', restaurant.category);
    expect(getByLabelText('주소')).toHaveAttribute('value', restaurant.address);
  });

  test('handleClickRegisterReservation', () => {
    const restaurant = {
      name: '서브웨이',
      category: '양식',
      address: '서울시 도봉구',
    };
    const { container, getByLabelText, getByText } = render(
      <App />,
    );

    fireEvent.change(
      getByLabelText('이름'),
      { target: { value: restaurant.name } },
    );
    fireEvent.change(
      getByLabelText('분류'),
      { target: { value: restaurant.category } },
    );
    fireEvent.change(
      getByLabelText('주소'),
      { target: { value: restaurant.address } },
    );

    expect(getByLabelText('이름')).toHaveAttribute('value', restaurant.name);
    expect(getByLabelText('분류')).toHaveAttribute('value', restaurant.category);
    expect(getByLabelText('주소')).toHaveAttribute('value', restaurant.address);

    fireEvent.click(getByText('등록'));

    expect(getByLabelText('이름')).toHaveAttribute('value', '');
    expect(getByLabelText('분류')).toHaveAttribute('value', '');
    expect(getByLabelText('주소')).toHaveAttribute('value', '');

    expect(container).toHaveTextContent('서브웨이|양식|서울시 도봉구');

  });
});

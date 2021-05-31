import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import RestaurantsCreateContainer from './RestaurantsCreateContainer';



test('RestaurantsCreateContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurant: {
    name: '마법사주방', category: '이탈리안', address: '서울시 강남구 역삼동',
    }
  }));

  const { getByText, getByDisplayValue } = render((
    <RestaurantsCreateContainer />
  ));

  expect(getByDisplayValue('이탈')).not.toBeNull();

  expect(getByDisplayValue('마법')).not.toBeNull();

  expect(getByDisplayValue('서울시')).not.toBeNull();

  expect(getByText('등록')).not.toBeNull();

  fireEvent.click(getByText(/등록/));

    expect(dispatch).toBeCalledWith({
      type: 'addRestaurants', 
    })
});

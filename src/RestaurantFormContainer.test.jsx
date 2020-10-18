import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import RestaurantFormContainer from './RestaurantFormContainer';

test('RestaurantFormContainer', () => {
  const dispatch = jest.fn();

  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      name: '키와미',
      category: '일식',
      address: '분당구 정자동',
    },
  }));

  useDispatch.mockImplementation(() => dispatch);

  const { getByDisplayValue, getByText } = render((
    <RestaurantFormContainer />
  ));

  expect(getByDisplayValue(/키와미/)).toBeInTheDocument();

  fireEvent.click(getByText(/등록/));

  expect(dispatch).toBeCalled();

  dispatch.mockClear();

  fireEvent.change(getByDisplayValue(/키와미/), {
    target: {
      value: '마녀식당',
    },
  });

  expect(dispatch).toBeCalledWith({
    type: 'updateRestaurant',
    payload: {
      field: 'name',
      value: '마녀식당',
    },
  });
});

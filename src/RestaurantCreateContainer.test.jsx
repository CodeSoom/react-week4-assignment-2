import React from 'react';

import { useSelector } from 'react-redux';

import { fireEvent, render } from '@testing-library/react';

import RestaurantCreateContainer from './RestaurantCreateContainer';

jest.mock('react-redux');

test('InputContainer', () => {
  useSelector = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({

    restaurants: {
      name: '마법',
      category: '이탈',
      address: '서울시',
    },
  }));

  const { getByText, getByDisplayValue } = render((
    <RestaurantCreateContainer />
  ));

  expect(getByDisplayValue('마법')).not.toBeNull();
  expect(getByDisplayValue('이탈')).not.toBeNull();
  expect(getByDisplayValue('서울시')).not.toBeNull();
  expect(getByText('등록')).not.toBeNull();

  fireEvent.click(getByText('서울시'));

  expect(dispatch).toBeCalledWith({
    target: { value: '서울시 강남구 역삼동' },
  });
  expect(dispatch).toBeCalledWith({
    type: 'changeRestaurantFielded',
    payload: {
      name: 'address',
      value: '서울시 강남구 역삼동',
    },
  });

  fireEvent.click(getByText('등록'));

  expect(dispatch).toBeCalledWith({
    type: 'addRestaurant',
  });
});

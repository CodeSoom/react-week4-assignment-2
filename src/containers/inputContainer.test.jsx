import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

test('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      name: '마녀주방',
      category: '한식',
      address: '서울시 성동구',
    },
  }));

  const { getByText, getByDisplayValue, getByPlaceholderText } = render((
    <InputContainer />
  ));

  expect(getByText(/등록/)).not.toBeNull();

  expect(getByDisplayValue(/마녀주방/)).not.toBeNull();
  expect(getByDisplayValue(/한식/)).not.toBeNull();
  expect(getByDisplayValue(/서울시 성동구/)).not.toBeNull();

  fireEvent.change(getByPlaceholderText('이름'), {
    target: { value: '시카고피자' },
  });

  expect(dispatch).toBeCalledWith(
    { type: 'changeRestaurantField', payload: { name: '시카고피자', category: '', address: '' } },
  );

  fireEvent.click(getByText(/등록/));

  expect(dispatch).toBeCalledWith({ type: 'addRestaurant' });
});

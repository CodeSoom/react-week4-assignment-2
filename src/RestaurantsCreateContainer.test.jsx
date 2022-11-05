import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent, getByDisplayValue } from '@testing-library/react';

import RestaurantsCreateContainer from './RestaurantsCreateContainer';

jest.mock('react-redux');

test('RestaurantsCreateContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      name: '베리',
      category: '이탈',
      address: '서울시',
    },
  }));

  const { getByText, getByDisplayValue } = render((
    <RestaurantsCreateContainer />
  ));

  expect(getByDisplayValue('베리')).not.toBeNull();
  expect(getByDisplayValue('이탈')).not.toBeNull();
  expect(getByDisplayValue('서울시')).not.toBeNull();
  expect(getByText('등록')).not.toBeNull();

  fireEvent.change(getByDisplayValue('서울시'), {
    target: { value: '서울시 강남구 역삼동' },
  });

  fireEvent.click(getByText('등록'));

  expect(dispatch).toBeCalledWith({
    type: 'changeRestaurantField',
    payload: {
      name: 'address',
      value: '서울시 강남구 역삼동',
    },
  });
});

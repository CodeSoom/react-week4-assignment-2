import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantCreateContainer from './RestaurantCreateContainer';

jest.mock('react-redux');

test('RestaurantCreateContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      name: '마법',
      category: '이탈',
      address: '서울시',
    },
  }));

  const { getByText } = render((
    <RestaurantCreateContainer />
  ));

  expect(getByText('마법')).not.toBeNull();
  expect(getByText('이탈')).not.toBeNull();
  expect(getByText('서울시')).not.toBeNull();
  expect(getByText('등록')).not.toBeNull();

  fireEvent.click(getByText('등록'));

  expect(dispatch).toBeCalledWith({
    type: 'addRestaurant',
  });
});

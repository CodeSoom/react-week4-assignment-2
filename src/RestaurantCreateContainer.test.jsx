import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import RestaurantCreateContainer from './RestaurantCreateContainer';

import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

test('RestaurantCreateContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurants: {
      name: '시카고피자',
      category: '양식',
      address: '이태원동',
    },
  }));

  const { getByText, getByDisplayValue } = render((<RestaurantCreateContainer />
  ));

  expect(getByDisplayValue(/시카고피자/)).not.toBeNull();
  expect(getByDisplayValue(/양식/)).not.toBeNull();
  expect(getByDisplayValue(/이태원동/)).not.toBeNull();

  expect(getByText(/등록/)).not.toBeNull();

  fireEvent.click(getByText(/등록/));

  expect(dispatch).toBeCalledWith({
    type: 'addRestaurant',
  });
});

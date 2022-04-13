import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantListContainer from './RestaurantListContainer';

jest.mock('react-redux');

test('RestaurantListContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const restaurants = [
    {
      id: 1, name: '도미노피자', category: '양식', address: '강남구',
    },
    {
      id: 2, name: '홍콩반점', category: '중식', address: '강북구',
    },
  ];

  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  const { queryByText } = render((
    <RestaurantListContainer />
  ));

  expect(queryByText('도미노피자 | 양식 | 강남구')).not.toBeNull();
  expect(queryByText('홍콩반점 | 중식 | 강북구')).not.toBeNull();
});

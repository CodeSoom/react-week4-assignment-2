import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantListContainer from './RestaurantListContainer';

jest.mock('react-redux');

describe('RestaurantListContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      {
        id: 1,
        name: '마녀주방',
        type: '한식',
        address: '서울시 강남구',
      },
      {
        id: 2,
        name: '시카고피자',
        type: '양식',
        address: '이태원역',
      },
    ],
  }));

  it('renders 레스토랑 정보', () => {
    const { getByText } = render(<RestaurantListContainer />);

    expect(getByText('마녀주방 | 한식 | 서울시 강남구')).toHaveTextContent('마녀주방 | 한식 | 서울시 강남구');
    expect(getByText('시카고피자 | 양식 | 이태원역')).toHaveTextContent('시카고피자 | 양식 | 이태원역');
  });
});

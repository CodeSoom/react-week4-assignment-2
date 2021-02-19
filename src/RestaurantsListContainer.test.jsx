import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsListContainer from './RestaurantsListContainer';

jest.mock('react-redux');

describe('RestaurantsListContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      restaurantsList: [
        {
          id: 100, name: '마녀 주방', category: '한식', address: '서울시 강남구',
        },
        {
          id: 101, name: '스시집', category: '일식', address: '서울시 동작구',
        },
        {
          id: 102, name: '중국집', category: '중식', address: '서울시 서초구',
        },
      ],
    }));
  });

  it('음식점 정보를 화면에 보여준다.', () => {
    const { queryByText } = render(<RestaurantsListContainer />);

    expect(queryByText('마녀 주방 | 한식 | 서울시 강남구')).toBeInTheDocument();
    expect(queryByText('스시집 | 일식 | 서울시 동작구')).toBeInTheDocument();
    expect(queryByText('중국집 | 중식 | 서울시 서초구')).toBeInTheDocument();
  });
});

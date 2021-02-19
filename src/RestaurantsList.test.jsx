import React from 'react';

import { render } from '@testing-library/react';

import RestaurantsList from './RestaurantsList';

describe('List', () => {
  context('식당목록이 없을 때', () => {
    const restaurants = [];

    it('아무것도 보여주지 않는다.', () => {
      const { container } = render(<RestaurantsList restaurants={restaurants} />);
      expect(container.innerText).toBeUndefined();
    });
  });

  context('식당목록이 있을 때', () => {
    const restaurants = [
      {
        id: 100, name: '마녀 주방', category: '한식', address: '서울시 강남구',
      },
      {
        id: 101, name: '스시집', category: '일식', address: '서울시 동작구',
      },
      {
        id: 102, name: '중국집', category: '중식', address: '서울시 서초구',
      },
    ];

    it('목록을 보여준다.', () => {
      const { queryByText } = render(<RestaurantsList restaurants={restaurants} />);

      expect(queryByText('마녀 주방 | 한식 | 서울시 강남구')).toBeInTheDocument();
      expect(queryByText('스시집 | 일식 | 서울시 동작구')).toBeInTheDocument();
      expect(queryByText('중국집 | 중식 | 서울시 서초구')).toBeInTheDocument();
    });
  });
});

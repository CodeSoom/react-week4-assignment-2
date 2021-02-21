import React from 'react';

import { render } from '@testing-library/react';

import { restaurantsList } from '../fixture/restaurants';

import RestaurantsList from './RestaurantsList';

describe('List', () => {
  context('식당목록이 없을 때', () => {
    const restaurants = [];

    it('목록을 보여주지 않는다.', () => {
      const { container } = render(<RestaurantsList restaurants={restaurants} />);

      expect(container.innerText).toBeUndefined();
    });
  });

  context('식당목록이 있을 때', () => {
    it('목록을 보여준다.', () => {
      const { queryByText } = render(<RestaurantsList restaurants={restaurantsList} />);

      expect(queryByText('마녀 주방 | 한식 | 서울시 강남구')).toBeInTheDocument();
      expect(queryByText('스시집 | 일식 | 서울시 동작구')).toBeInTheDocument();
      expect(queryByText('중국집 | 중식 | 서울시 서초구')).toBeInTheDocument();
    });
  });
});

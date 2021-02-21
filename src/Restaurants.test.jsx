import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  context('with information', () => {
    const restaurants = [
      {
        id: 1,
        name: '마녀주방',
        category: '한식',
        address: '서울시 강남구',
      },
    ];

    it('renders restaurant information', () => {
      const { getByText } = render((
        <Restaurants
          restaurants={restaurants}
        />
      ));

      expect(getByText(/마녀주방/)).not.toBeNull();
    });
  });

  context('without information', () => {
    it('renders nothing', () => {
      const { getByText } = render((
        <Restaurants
          restaurants={[]}
        />
      ));

      expect(getByText(/입력된 레스토랑 정보가 없습니다/)).not.toBeNull();
    });
  });
});

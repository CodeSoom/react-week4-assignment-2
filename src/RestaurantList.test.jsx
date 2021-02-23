import React from 'react';

import { render } from '@testing-library/react';

import RestaurantList from './RestaurantList';

describe('RestaurantList', () => {
  context('when there is no restaurants', () => {
    const restaurants = [];

    it('renders nothing', () => {
      const { container } = render((
        <RestaurantList restaurants={restaurants} />
      ));

      expect(container).toHaveTextContent('목록이 없습니다');
    });
  });

  it('renders restaurant list', () => {
    const restaurants = [{
      id: 1,
      name: '자매수산',
      category: '일식',
      address: '서울시 논현동',
    }];

    const { container } = render((
      <RestaurantList restaurants={restaurants} />
    ));

    expect(container).toHaveTextContent('자매수산');
    expect(container).toHaveTextContent('일식');
    expect(container).toHaveTextContent('서울시 논현동');
  });
});

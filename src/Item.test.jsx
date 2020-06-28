import React from 'react';

import { render } from '@testing-library/react';

import Item from './Item';

describe('Item', () => {
  it('restaurant 정보가 보인다.', () => {
    const restaurant = {
      id: 1, name: '한식당', category: '한식', address: '강남구',
    };

    const { container } = render(
      <Item
        restaurant={restaurant}
      />,
    );

    expect(container).toHaveTextContent(`${restaurant.name} | ${restaurant.category} | ${restaurant.address}`);
  });
});

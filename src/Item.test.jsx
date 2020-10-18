import React from 'react';

import { render } from '@testing-library/react';

import { restaurantInfo } from './fixtures/fixtures';
import Item from './Item';

describe('Item', () => {
  const itemRender = (restaurant) => render((
    <Item
      restaurant={restaurant}
    />
  ));

  it('"restaurant"이 보인다.', () => {
    const { container } = itemRender(restaurantInfo);

    const { address, category, name } = restaurantInfo;

    expect(container).toHaveTextContent(`${name} | ${category} | ${address}`);
  });
});

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
    const { getByText } = itemRender(restaurantInfo);

    expect(getByText(/마녀주방/)).not.toBeNull();
    expect(getByText(/한식/)).not.toBeNull();
    expect(getByText(/서울시 강남구/)).not.toBeNull();
  });
});

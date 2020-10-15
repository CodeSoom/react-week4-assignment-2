import React from 'react';

import { render } from '@testing-library/react';

import Item from './Item';

describe('Item', () => {
  const restaurant = {
    name: '마녀주방', type: '약식', adress: '강남구 서현동',
  };

  it('shows a restaurants', () => {
    const { getByText } = render(<Item restaurant={restaurant} />);

    expect(getByText(`${restaurant.name} | ${restaurant.type} | ${restaurant.address}`)).not.toBeNull();
  });
});

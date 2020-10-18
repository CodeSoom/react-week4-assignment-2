import React from 'react';

import { render } from '@testing-library/react';

import Item from './Item';

describe('Item', () => {
  const restaurant = {
    id: 100, name: '마녀주방', category: '약식', address: '강남구 서현동',
  };

  it('shows a restaurants', () => {
    const { getByText } = render(<Item restaurant={restaurant} />);

    expect(getByText(`${restaurant.name} | ${restaurant.category} | ${restaurant.address}`)).not.toBeNull();
  });
});

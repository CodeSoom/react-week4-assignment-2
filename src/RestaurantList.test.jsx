import React from 'react';

import { render } from '@testing-library/react';

import RestaurantList from './RestaurantList';

describe('RestaurantList', () => {
  it('renders RestaurantList', () => {
    const restaurants = [
      {
        id: 1,
        title: '마녀주방',
        category: '한식',
        address: '서울시 강남구',
      },
    ];

    const { getByText } = render(<RestaurantList restaurants={restaurants} />);

    expect(getByText('마녀주방')).not.toBeNull();
    expect(getByText('한식')).not.toBeNull();
    expect(getByText('서울시 강남구')).not.toBeNull();
  });
});

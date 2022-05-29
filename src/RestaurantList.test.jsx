import React from 'react';

import { render } from '@testing-library/react';

import RestaurantList from './RestaurantList';

describe('RestaurantList', () => {
  const restaurants = [
    { id: 1, text: '중국집 | 중식 | 홍대' },
    { id: 2, text: '한식집 | 한식 | 신촌' },
  ];

  it('render restaurants', () => {
    const { getByText } = render((<RestaurantList restaurants={restaurants} />));

    expect(getByText('중국집 | 중식 | 홍대')).not.toBeNull();
    expect(getByText('한식집 | 한식 | 신촌')).not.toBeNull();
  });
});

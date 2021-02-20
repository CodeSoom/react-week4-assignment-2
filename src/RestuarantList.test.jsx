import React from 'react';

import { render } from '@testing-library/react';

import RestaurantList from './RestaurantList';

describe('RestaurantList', () => {
  const restaurants = [
    {
      id: 1, title: '자매수산', category: '일식', address: '서울시 논현동',
    },
  ];

  it('renders restaurant list', () => {
    const { container } = render((
      <RestaurantList restaurants={restaurants} />
    ));

    expect(container).toHaveTextContent('자매수산');
    expect(container).toHaveTextContent('일식');
    expect(container).toHaveTextContent('서울시 논현동');
  });
});

import React from 'react';

import { render } from '@testing-library/react';

import Restaurant from './Restaurant';

describe('Restaurant', () => {
  const restaurant = {
    name: '베이징',
    category: '중식',
    address: '파주시',
  };

  const renderRestaurant = () => render((
    <Restaurant
      restaurant={restaurant}
    />
  ));

  it('renders restaurant', () => {
    const { container } = renderRestaurant(restaurant);

    expect(container).toHaveTextContent('베이징');
  });
});

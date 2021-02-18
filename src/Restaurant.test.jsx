import React from 'react';

import { render } from '@testing-library/react';

import Restaurant from './Restaurant';

describe('Restaurant', () => {
  const renderRestaurant = ({ name, category, address }) => render((
    <Restaurant
      name={name}
      category={category}
      address={address}
    />
  ));

  const restaurant = {
    name: '베이징',
    category: '중식',
    address: '파주시',
  };

  it('renders restaurant', () => {
    const { container } = renderRestaurant(restaurant);

    expect(container).toHaveTextContent('베이징');
  });
});

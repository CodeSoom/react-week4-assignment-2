import React from 'react';

import Restaurant from './Restaurant';

export default function RestaurantList({ restaurants = [] }) {
  return (
    <ul>
      {restaurants.map(({
        id, name, category, address,
      }) => (
        <Restaurant
          key={id}
          name={name}
          category={category}
          address={address}
        />
      ))}
    </ul>
  );
}

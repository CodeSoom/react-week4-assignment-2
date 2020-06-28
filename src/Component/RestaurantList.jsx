import React from 'react';

import Restaurant from './Restaurant';

export default function RestaurantList({ restaurants }) {
  return (
    <ul>
      {restaurants.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          restaurant={restaurant}
        />
      ))}
    </ul>
  );
}

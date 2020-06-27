import React from 'react';
import Restaurant from './Restaurant';

export default function List({ restaurants }) {
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

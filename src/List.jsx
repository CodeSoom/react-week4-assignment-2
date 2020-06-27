import React from 'react';
import Restaurant from './Restaurant';

export default function List({ restaurants }) {
  return (
    <ol>
      {restaurants.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          restaurant={restaurant}
        />
      ))}
    </ol>
  );
}

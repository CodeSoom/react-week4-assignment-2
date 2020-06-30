import React from 'react';

export default function Restaurants({ restaurants }) {
  if (!restaurants) {
    return '';
  }

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          {restaurant.name}
          {' '}
          |
          {' '}
          {restaurant.category}
          {' '}
          |
          {' '}
          {restaurant.address}
        </li>
      ))}
    </ul>
  );
}

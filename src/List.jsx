import React from 'react';

export default function List({ restaurants }) {
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

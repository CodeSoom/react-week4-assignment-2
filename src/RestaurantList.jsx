import React from 'react';

export default function RestaurantList({ restaurants = [] }) {
  return (
    <ul>
      {restaurants.map(({
        id, name, category, address,
      }) => (
        <li key={id}>
          {name}
          {' '}
          |
          {' '}
          {category}
          {' '}
          |
          {' '}
          {address}
        </li>
      ))}
    </ul>
  );
}

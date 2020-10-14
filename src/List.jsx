import React from 'react';

export default function List({ restaurants }) {
  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.name}>
          {restaurant.name}
          |
          {restaurant.classification}
          |
          {restaurant.location}
        </li>
      ))}
    </ul>
  );
}

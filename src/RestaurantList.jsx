import React from 'react';

export default function RestaurantList({
  restaurants,
}) {
  return (
    <ul>
      {
        restaurants.map(({
          id,
          name,
          category,
          address,
        }) => (
          <li key={id}>
            <span>{name}</span>
            <span>{category}</span>
            <span>{address}</span>
          </li>
        ))
      }
    </ul>
  );
}

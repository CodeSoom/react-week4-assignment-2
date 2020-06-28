import React from 'react';

import { useSelector } from 'react-redux';

export default function InputContainer() {
  const restaurants = useSelector((state) => (state.restaurants));

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

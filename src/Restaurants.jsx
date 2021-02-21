import React from 'react';

export default function Restaurants({ restaurants }) {
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
      <li>
        김밥제국
      </li>
    </ul>
  );
}

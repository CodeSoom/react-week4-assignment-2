import React from 'react';

export default function RestaurantList({ restaurants }) {
  return (
    <div>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant}>
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
    </div>
  );
}

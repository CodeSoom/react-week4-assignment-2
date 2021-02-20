import React from 'react';

export default function RestaurantList({ restaurants }) {
  return (
    <div>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant}>
            {restaurant.title}
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

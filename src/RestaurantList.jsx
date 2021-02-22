import React from 'react';

export default function RestaurantList({ restaurants }) {
  return (
    <div>
      {restaurants ? (
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
      ) : null}
    </div>
  );
}

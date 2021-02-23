import React from 'react';

export default function RestaurantList({ restaurants }) {
  if (restaurants.length === 0) {
    return (
      <p>목록이 없습니다.</p>
    );
  }

  return (
    <div>
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
    </div>
  );
}

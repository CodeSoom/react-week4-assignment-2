import React from 'react';

import Restaurant from './Restaurant';

export default function RestaurantList({ restaurants = [] }) {
  if (restaurants.length === 0) {
    return (
      <p>등록 된 레스토랑이 없습니다.</p>
    );
  }

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          restaurant={restaurant}
        />
      ))}
    </ul>
  );
}

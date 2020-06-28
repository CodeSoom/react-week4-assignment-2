import React from 'react';

export default function RestaurantList({ restaurantList }) {
  return (
    <ul>
      {restaurantList.map((restaurant) => (
        <li key={restaurant.id}>
          {restaurant.name}
          |
          {restaurant.category}
          |
          {restaurant.address}
        </li>
      ))}
    </ul>
  );
}

import React from 'react';

export default function List({ restaurants }) {

  if (!restaurants) {
    return '';
  }

  return (
    <ul>
      {restaurants.map((restaurant) =>
      `<li>${restaurant.name}|${restaurant.category}|${restaurant.address}</li>`
    )}
    </ul>
  );
}
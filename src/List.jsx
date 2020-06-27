import React from 'react';

export default function List({ restaurants }) {
  const restaurantIntoText = ({ name, category, address }) => `${name} | ${category} | ${address}`;

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          {restaurantIntoText(restaurant)}
        </li>
      ))}
    </ul>
  );
}

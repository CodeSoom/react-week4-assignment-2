import React from 'react';

export default function RestaurantList({
  restaurants,
}) {
  return (
    <ul>
      {
        restaurants.map((restuaruant) => (
          <li key={restuaruant.id}>
            <span>{restuaruant.name}</span>
            <span>{restuaruant.category}</span>
            <span>{restuaruant.address}</span>
          </li>
        ))
      }
    </ul>
  );
}

import React from 'react';

import { useSelector } from 'react-redux';

export default function ListContainer() {
  const { restaurants } = useSelector((restaurant) => ({
    restaurants: restaurant.restaurants,
  }));

  return (
    <div>
      <ul>
        {
          restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              {`${restaurant.name} | ${restaurant.category} | ${restaurant.address}`}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

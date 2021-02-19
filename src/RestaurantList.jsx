import React from 'react';

function RestaurantList({
  restaurants,
}) {
  return (
    <ul>
      {
        restaurants.map(({
          id,
          title,
          category,
          address,
        }) => (
          <li key={id}>
            <span>{title}</span>
            <span>{category}</span>
            <span>{address}</span>
          </li>
        ))
      }
    </ul>
  );
}

export default RestaurantList;

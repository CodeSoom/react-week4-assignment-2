import React from 'react';

import Item from './Item';

export default function List({ restaurants }) {
  return (
    <ul>
      {
        restaurants.map((restaurant) => (
          <Item key={restaurant.name} restaurant={restaurant} />
        ))
      }
    </ul>
  );
}

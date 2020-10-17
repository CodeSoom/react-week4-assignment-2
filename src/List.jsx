import React from 'react';

import ListItem from './ListItem';

export default function List({ restaurants }) {
  return (
    <ul>
      {restaurants.map((restaurant) => (
        <ListItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </ul>
  );
}

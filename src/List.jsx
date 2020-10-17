import React from 'react';

import Item from './Item';

const List = ({ restaurants }) => (
  <ul>
    {restaurants.map((restaurant) => (
      <Item key={restaurant.id} restaurant={restaurant} />
    ))}
  </ul>
);

export default List;

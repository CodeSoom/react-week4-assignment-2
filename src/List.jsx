import React from 'react';

import Item from './Item';

const List = ({ restaurants }) => (
  <ol>
    {restaurants.map((restaurant) => (
      <Item key={restaurant.id} restaurant={restaurant} />
    ))}
  </ol>
);

export default List;

import React from 'react';

import Item from './Item';

export default function List({
  restaurants,
}) {
  if (restaurants.length === 0) {
    return false;
  }

  return (
    <ul>
      {restaurants.map((v) => (
        <Item restaurants={v} key={v.id} />
      ))}
    </ul>
  );
}

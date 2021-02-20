import React from 'react';

function Item({ restaurantInfo }) {
  const {
    name, category, address,
  } = restaurantInfo;
  return (
    <li>
      <span>{name}</span>
      <hr />
      <span>{category}</span>
      <hr />
      <span>{address}</span>
    </li>
  );
}

export default Item;

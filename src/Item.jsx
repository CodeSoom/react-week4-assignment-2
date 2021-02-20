import React from 'react';

function Item({ restaurantInfo }) {
  const {
    name, category, address,
  } = restaurantInfo;
  return (
    <li>
      <span>{name}</span>
      <span>|</span>
      <span>{category}</span>
      <span>|</span>
      <span>{address}</span>
    </li>
  );
}

export default Item;

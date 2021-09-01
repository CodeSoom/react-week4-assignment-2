import React from 'react';

export default function Item({ restaurant: { name, category, address } }) {
  return (
    <li>
      {name}
      {category}
      {address}
    </li>
  );
}

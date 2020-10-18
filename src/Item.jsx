import React from 'react';

export default function Item({ restaurant: { name, category, address } }) {
  return (
    <li>
      {name}
      &nbsp;
      |
      &nbsp;
      {category}
      &nbsp;
      |
      &nbsp;
      {address}
    </li>
  );
}

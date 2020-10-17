import React from 'react';

export default function ListItem({ restaurant: { name, category, address } }) {
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

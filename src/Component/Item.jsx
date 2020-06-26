import React from 'react';

export default function Item({ information }) {
  const { name, category, address } = information;

  return (
    <li>
      {name}
      |
      {category}
      |
      {address}
    </li>
  );
}

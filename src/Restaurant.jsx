import React from 'react';

export default function Restaurant({ restaurant: { name, category, address } }) {
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

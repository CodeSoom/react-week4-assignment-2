import React from 'react';

export default function Restaurant({ restaurant: { name, classify, address } }) {
  return (
    <li>
      {name}
      |
      {classify}
      |
      {address}
    </li>
  );
}

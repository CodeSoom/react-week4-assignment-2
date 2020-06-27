import React from 'react';

export default function Restaurant({ restaurant: { name, type, address } }) {
  return (
    <li>
      {name}
      {' '}
      |
      {type}
      {' '}
      |
      {address}
    </li>
  );
}

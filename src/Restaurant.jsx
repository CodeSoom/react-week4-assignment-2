import React from 'react';

export default function Restaurant({ name, category, address }) {
  return (
    <li>
      {name}
      {' '}
      |
      {' '}
      {category}
      {' '}
      |
      {' '}
      {address}
    </li>
  );
}

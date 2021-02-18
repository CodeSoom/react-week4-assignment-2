import React from 'react';

export default function Restaurant({ name, type, address }) {
  return (
    <li>
      {name}
      {' '}
      |
      {' '}
      {type}
      {' '}
      |
      {' '}
      {address}
    </li>
  );
}

import React from 'react';

export default function Item({
  restaurants: {
    name, type, address,
  },
}) {
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

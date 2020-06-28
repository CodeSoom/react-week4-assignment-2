import React from 'react';

export default function List({
  restaurant: { name, category, address },
}) {
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

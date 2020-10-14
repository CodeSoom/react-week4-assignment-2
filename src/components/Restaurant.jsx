import React from 'react';

export default function Restaurant({
  items: {
    id, name, category, address,
  },
}) {
  return (
    <li>
      {name}
      {' | '}
      {category}
      {' | '}
      {address}
    </li>
  );
}

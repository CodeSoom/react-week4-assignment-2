import React from 'react';

export default function Item({ name, category, address }) {
  if (name === '' || category === '' || address === '') {
    return '';
  }

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

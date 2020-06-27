import React from 'react';

export default function Registration({ registration: { name, type, address } }) {
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

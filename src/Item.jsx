import React from 'react';

export default function Item({ restaurant: { name, type, address } }) {
  return (
    <li>
      {`${name} | ${type} | ${address}`}
    </li>
  );
}

import React from 'react';

export default function Item({ name, category, address }) {
  return (
    <li>
      {`${name} | ${category} | ${address}`}
    </li>
  );
}

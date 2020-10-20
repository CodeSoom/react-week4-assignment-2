import React from 'react';

export default function Restaurants({ restaurants }) {
  return restaurants.map(({
    id,
    name,
    category,
    address,
  }) => (
    <li key={id}>
      {`${name} | ${category} | ${address}`}
    </li>
  ));
}

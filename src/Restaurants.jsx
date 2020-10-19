import React from 'react';

export default function Restaurants({ restaurants }) {
  return restaurants.map(({
    id,
    name,
    cuisine,
    location,
  }) => (
    <li key={id}>
      {`${name} | ${cuisine} | ${location}`}
    </li>
  ));
}

import React from 'react';

function renderRestaurants(restaurants) {
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

export default function List({ restaurants }) {
  return (
    <ul>
      {restaurants ? renderRestaurants(restaurants) : null}
    </ul>
  );
}

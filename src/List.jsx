import React from 'react';

import { useSelector } from 'react-redux';

function selector(state) {
  const { restaurants } = state;

  return { restaurants };
}

function renderRestaurants() {
  const { restaurants } = useSelector(selector);

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

export default function List() {
  const { restaurants } = useSelector(selector);

  return (
    <ul>
      {restaurants ? renderRestaurants() : null}
    </ul>
  );
}

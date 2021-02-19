import React from 'react';

export default function List({ restaurants = [] }) {
  return (
    <ul>
      {restaurants.map(({
        id, name, category, address,
      }) => (
        <li key={id}>
          {`${name} | ${category} | ${address}`}
        </li>
      ))}
    </ul>
  );
}

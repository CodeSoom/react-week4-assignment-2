import React from 'react';

export default function List({ restaurants }) {
  return (
    <ul>
      {restaurants.map(({ name, category, address }) => (
        <li key={name + category + address}>
          {`${name} | ${category} | ${address}`}
        </li>
      ))}
    </ul>
  );
}

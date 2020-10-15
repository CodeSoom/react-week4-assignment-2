import React from 'react';

export default function List({ restaurants }) {
  return (
    <ul>
      {restaurants.map(({
        key,
        name,
        type,
        address,
      }) => (
        <li key={key}>
          {`${name} | ${type} | ${address}`}
        </li>
      ))}
    </ul>
  );
}

import React from 'react';

export default function List({ restaurants }) {
  return (
    <ul>
      {restaurants.map(({
        id, title, kind, address,
      }) => (
        <li key={id}>{`${title} | ${kind} | ${address}`}</li>
      ))}
    </ul>
  );
}

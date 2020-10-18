import React from 'react';

export default function List({ reservations }) {
  return (
    <ul>
      {reservations.map(({ name, type, address }) => (
        <li key={name + type + address}>
          { `${name} | ${type} | ${address}` }
        </li>
      ))}
    </ul>
  );
}

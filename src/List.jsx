import React from 'react';

export default function List({ restaurants }) {
  return (
    <ul>
      {restaurants.map(({ name, classification, location }) => (
        <li key={name}>
          {name}
          |
          {classification}
          |
          {location}
        </li>
      ))}
    </ul>
  );
}

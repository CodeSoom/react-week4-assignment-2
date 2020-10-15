import React from 'react';

export default function Page({ restaurants }) {
  return (
    <ul>
      {restaurants.map(({ name, category, address }) => (
        <li>
          {name}
          |
          {category}
          |
          {address}
        </li>
      ))}
    </ul>
  );
}

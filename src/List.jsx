import React from 'react';

export default function Page({ restaurants }) {
  if (restaurants.length === 0) {
    return '식당이 없어요!';
  }

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

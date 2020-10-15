import React from 'react';

const isEmpty = (array) => array.length === 0;

export default function Page({ restaurants }) {
  if (isEmpty(restaurants)) {
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

import React from 'react';

const isEmpty = (array) => array.length === 0;

export default function List({ restaurants }) {
  if (isEmpty(restaurants)) {
    return '식당이 없어요!';
  }

  return (
    <ul>
      {restaurants.map(({
        id,
        name,
        category,
        address,
      }) => (
        <li key={id}>
          {`${name} | ${category} | ${address}`}
        </li>
      ))}
    </ul>
  );
}

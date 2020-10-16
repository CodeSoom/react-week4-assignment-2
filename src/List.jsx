import React from 'react';

export default function List({ restaurants }) {
  return (
    <>
      <h1>Restaurants</h1>
      <ul>
        {restaurants.map(({
          name,
          category,
          address,
          id,
        }) => (
          <li key={id}>
            {name}
            |
            {category}
            |
            {address}
          </li>
        ))}
        ;
      </ul>
    </>

  );
}

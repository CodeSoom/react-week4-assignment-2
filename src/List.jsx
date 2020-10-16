import React from 'react';

export default function List({ restaurants }) {
  return (
    <>
      <h1>Restaurants</h1>
      <ul>
        {restaurants.map(({
          nameTitle,
          classification,
          location,
          id,
        }) => (
            <li key={id}>
              {nameTitle}
              {' '}
            |
              {' '}
              {classification}
              {' '}
            |
              {' '}
              {location}
            </li>
          ))}
        ;
      </ul>
    </>

  );
}

import React from 'react';

export default function List({ restaurantLists }) {
  return (
    <>
      <h1>Restaurants</h1>
      <ul>
        {restaurantLists.map(({
          nameTitle,
          classification,
          location,
          id,
        }) => (
            <li key={id}>
              {nameTitle}
            |
              {classification}
              {' '}
            |
              {' '}
              {location}
            </li>
          ))}
      </ul>
    </>

  );
}

import React from 'react';

export default function List({ restaurantLists }) {
  return (
    <>
      <h1>Restaurants</h1>
      <ul>
        {restaurantLists.map(({ nameTitle, classify, location }) => (
          <li>
            {nameTitle}
            |
            {classify}
            |
            {location}
          </li>
        ))}
      </ul>
    </>

  );
}

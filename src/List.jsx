import React from 'react';

export default function List({ restaurants }) {
  return (
    <ul>
      {
        restaurants.map((restuarant) => (
          <li key={restuarant.id}>
            {`${restuarant.name} | ${restuarant.category} | ${restuarant.address}`}
          </li>
        ))
      }
    </ul>
  );
}

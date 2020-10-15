import React from 'react';

export default function Page({ restaurants }) {
  return (
    <div>
      <h1>Restaurants</h1>
      {restaurants.map(({ name, category, address }) => (
        <p>
          {name}
          |
          {category}
          |
          {address}
        </p>
      ))}
    </div>
  );
}

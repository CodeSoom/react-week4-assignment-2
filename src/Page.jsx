import React from 'react';

export default function Page({ restaurants, restaurant }) {
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
      <input type="text" value={restaurant.name} />
      <input type="text" value={restaurant.category} />
      <input type="text" value={restaurant.address} />
    </div>
  );
}

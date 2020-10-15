import React from 'react';

export default function Page({ restaurants, restaurant, onClickAdd }) {
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
      <button type="button" onClick={onClickAdd}>등록</button>
    </div>
  );
}

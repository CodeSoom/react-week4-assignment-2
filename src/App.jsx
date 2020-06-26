import React from 'react';

import restaurants from '../__fixture__/data';

export default function App() {
  return (
    <div>
      <h2>Restaurants</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            {restaurant.name}
            |
            {restaurant.type}
            |
            {restaurant.address}
          </li>
        ))}
      </ul>
      <input placeholder="이름" />
      <input placeholder="분류" />
      <input placeholder="주소" />
      <button type="button">등록</button>
    </div>
  );
}

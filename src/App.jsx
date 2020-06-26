import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { addRestaurant } from './action';

function selector(state) {
  return {
    restaurants: state.restaurants,
  };
}

export default function App() {
  const { restaurants } = useSelector(selector);

  const dispatch = useDispatch();

  function handleAddRestaurant() {
    dispatch(addRestaurant());
  }

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
      <button onClick={handleAddRestaurant} type="button">
        등록
      </button>
    </div>
  );
}

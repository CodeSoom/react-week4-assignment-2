import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  changeName, changeType, changeAddress, addRestaurant,
} from './action';

function selector(state) {
  return {
    restaurants: state.restaurants,
  };
}

export default function App() {
  const { restaurants } = useSelector(selector);

  const dispatch = useDispatch();

  function handleChangeName() {
    dispatch(changeName());
  }

  function handleChangeType() {
    dispatch(changeType());
  }

  function handleChangeAddress() {
    dispatch(changeAddress());
  }

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
      <input name="name" type="text" onChange={handleChangeName} placeholder="이름" />
      <input name="category" type="text" onChange={handleChangeType} placeholder="분류" />
      <input name="address" type="text" onChange={handleChangeAddress} placeholder="주소" />
      <button onClick={handleAddRestaurant} type="button">
        등록
      </button>
    </div>
  );
}

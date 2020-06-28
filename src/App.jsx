import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  changeName, changeType, changeAddress, addRestaurant,
} from './action';

function selector(state) {
  return {
    restaurants: state.restaurants,
    restaurant: state.restaurant,
  };
}

export default function App() {
  const {
    restaurants,
    restaurant,
  } = useSelector(selector);

  const dispatch = useDispatch();

  function handleChangeName(event) {
    dispatch(changeName(event.target.value));
  }

  function handleChangeType(event) {
    dispatch(changeType(event.target.value));
  }

  function handleChangeAddress(event) {
    dispatch(changeAddress(event.target.value));
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
      <input
        name="name"
        type="text"
        value={restaurant.name}
        onChange={handleChangeName}
        placeholder="이름"
      />
      <input
        name="category"
        type="text"
        value={restaurant.type}
        onChange={handleChangeType}
        placeholder="분류"
      />
      <input
        name="address"
        type="text"
        value={restaurant.address}
        onChange={handleChangeAddress}
        placeholder="주소"
      />
      <button onClick={handleAddRestaurant} type="submit">
        등록
      </button>
    </div>
  );
}

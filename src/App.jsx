import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  changeName, changeType, changeAddress, addRestaurant,
} from './action';

function selector(state) {
  return {
    restaurants: state.restaurants,
    restaurantName: state.restaurantName,
    restaurantType: state.restaurantType,
    restaurantAddress: state.restaurantAddress,
  };
}

export default function App() {
  const {
    restaurants,
    restaurantName,
    restaurantType,
    restaurantAddress,
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
        value={restaurantName}
        onChange={handleChangeName}
        placeholder="이름"
      />
      <input
        name="category"
        type="text"
        value={restaurantType}
        onChange={handleChangeType}
        placeholder="분류"
      />
      <input
        name="address"
        type="text"
        value={restaurantAddress}
        onChange={handleChangeAddress}
        placeholder="주소"
      />
      <button onClick={handleAddRestaurant} type="submit">
        등록
      </button>
    </div>
  );
}

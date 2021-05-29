import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  updateName,
  updateCategory,
  updateAddress,
  addRestaurantInformation,
} from './actions';

function selector(restaurant) {
  return {
    name: restaurant.name,
    category: restaurant.category,
    address: restaurant.address,
    restaurants: restaurant.restaurants,
  };
}

export default function App() {
  const { restaurants } = useSelector(selector);

  const dispatch = useDispatch();

  function handleChangeName(event) {
    dispatch(updateName(event.target.value));
  }

  function handleChangeCategory(event) {
    dispatch(updateCategory(event.target.value));
  }

  function handleChangeAddress(event) {
    dispatch(updateAddress(event.target.value));
  }

  function handleClickAddButton() {
    dispatch(addRestaurantInformation());
  }

  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        {
          restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              {`${restaurant.name} | ${restaurant.category} | ${restaurant.address}`}
            </li>
          ))
        }
      </ul>
      <input type="text" placeholder="이름" onChange={handleChangeName} />
      <input type="text" placeholder="분류" onChange={handleChangeCategory} />
      <input type="text" placeholder="주소" onChange={handleChangeAddress} />
      <button type="button" onClick={handleClickAddButton}>등록</button>
    </div>
  );
}

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeRestaurant, saveNewRestaurant } from './actions';

export default function App() {
  const { newRestaurant, restaurants } = useSelector((state) => ({
    newRestaurant: state.newRestaurant,
    restaurants: state.restaurants,
  }));

  const dispatch = useDispatch();

  function handleChange(event) {
    dispatch(changeRestaurant(
      event.target.name,
      event.target.value,
    ));
  }

  function handleClickSubmit(event) {
    event.preventDefault();
    dispatch(saveNewRestaurant());
  }

  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        {
          restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              {restaurant.name}
              {' '}
              |
              {' '}
              {restaurant.category}
              {' '}
              |
              {' '}
              {restaurant.address}
            </li>
          ))
        }
      </ul>
      <form onSubmit={handleClickSubmit}>
        <input
          type="text"
          name="name"
          value={newRestaurant.name}
          placeholder="이름"
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          value={newRestaurant.category}
          placeholder="분류"
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          value={newRestaurant.address}
          placeholder="주소"
          onChange={handleChange}
        />
        <input type="submit" value="등록" />
      </form>
    </div>
  );
}

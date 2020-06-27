import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeRestaurant, saveNewRestaurant } from './actions';
import RestaurantsContainer from './RestaurantsContainer';

export default function App() {
  const { newRestaurant } = useSelector((state) => ({
    newRestaurant: state.newRestaurant,
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
      <RestaurantsContainer />
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

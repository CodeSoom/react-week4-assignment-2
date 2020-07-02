import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  updateRestaurantInfo, addRestaurant,
} from './stores/action/action-creators';

export default function App() {
  const { restaurants, restaurant } = useSelector((state) => ({
    restaurants: state.restaurants,
    restaurant: state.restaurant,
  }));

  const dispatch = useDispatch();

  function handleUpdateRestaurantInfo(ev) {
    dispatch(updateRestaurantInfo(ev.target.name, ev.target.value));
  }

  function handleAddRestaurant() {
    dispatch(addRestaurant());
  }

  return (
    <div>
      <h1>Restaurants</h1>
      <ol>
        {
          restaurants.map((e) => (
            <li key={e.id}>
              {e.name}
              |
              {e.category}
              |
              {e.address}
            </li>
          ))
        }
      </ol>
      <input type="text" name="name" value={restaurant.name} onChange={handleUpdateRestaurantInfo} />
      <input type="text" name="category" value={restaurant.category} onChange={handleUpdateRestaurantInfo} />
      <input type="text" name="address" value={restaurant.address} onChange={handleUpdateRestaurantInfo} />
      <button type="button" onClick={handleAddRestaurant}>등록</button>
    </div>
  );
}

import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  updateRestaurantName, updateRestaurantCategory, updateRestaurantAddress, addRestaurant,
} from './stores/action/action-creators';

export default function App() {
  const { restaurants, restaurant } = useSelector((state) => ({
    restaurants: state.restaurants,
    restaurant: state.restaurant,
  }));

  const dispatch = useDispatch();

  function handleInputRestaurantName(ev) {
    dispatch(updateRestaurantName(ev.target.value));
  }

  function handleInputRestaurantCategory(ev) {
    dispatch(updateRestaurantCategory(ev.target.value));
  }

  function handleInputRestaurantAddress(ev) {
    dispatch(updateRestaurantAddress(ev.target.value));
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
      <input type="text" name="name" value={restaurant.name} onChange={handleInputRestaurantName} />
      <input type="text" name="category" value={restaurant.category} onChange={handleInputRestaurantCategory} />
      <input type="text" name="address" value={restaurant.address} onChange={handleInputRestaurantAddress} />
      <button type="button" onClick={handleAddRestaurant}>등록</button>
    </div>
  );
}

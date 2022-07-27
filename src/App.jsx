import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  setRestaurants,
  changeName,
  changeType,
  changeLocation,
  addRestaurant,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  function selector(state) {
    return {
      restaurantName: state.restaurantName,
      restaurantType: state.restaurantType,
      restaurantLocation: state.restaurantLocation,
      restaurants: state.restaurants,
    };
  }

  const {
    restaurants,
    restaurantName,
    restaurantType,
    restaurantLocation,
  } = useSelector(selector);

  function handleChangeName(name) {
    dispatch(changeName(name));
  }

  function handleChangeType(type) {
    dispatch(changeType(type));
  }

  function handleChangeLocation(location) {
    dispatch(changeLocation(location));
  }

  useEffect(() => {
    dispatch(setRestaurants(restaurants));
  }, [restaurants]);

  function submitNewRestaurant(event) {
    event.preventDefault();
    dispatch(addRestaurant());
    return null;
  }

  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        {restaurants && restaurants.map((restaurant) => {
          const restaurantItem = `${restaurant.name} | ${restaurant.type} | ${restaurant.location}`;
          return (
            <li key={restaurant.id}>
              {restaurantItem}
            </li>
          );
        })}
      </ul>
      <form>
        <input
          type="text"
          name="name"
          value={restaurantName}
          onChange={(e) => handleChangeName(e.target.value)}
        />
        <input
          type="text"
          name="category"
          value={restaurantType}
          onChange={(e) => handleChangeType(e.target.value)}
        />
        <input
          type="text"
          name="address"
          value={restaurantLocation}
          onChange={(e) => handleChangeLocation(e.target.value)}
        />
        <button type="submit" onClick={submitNewRestaurant}>등록</button>
      </form>
    </div>
  );
}

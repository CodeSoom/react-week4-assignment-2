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

  useEffect(() => {
    dispatch(setRestaurants(restaurants));
  }, []);

  function submitNewRestaurant(event) {
    event.preventDefault();
    addRestaurant();
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
          name="restaurant-name"
          value={restaurantName}
          onChange={changeName}
        />
        <input
          type="text"
          name="restaurant-type"
          value={restaurantType}
          onChange={changeType}
        />
        <input
          type="text"
          name="restaurant-location"
          value={restaurantLocation}
          onChange={changeLocation}
        />
        <button type="submit" onClick={submitNewRestaurant}>등록</button>
      </form>
    </div>
  );
}

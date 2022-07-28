import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  setRestaurants,
} from './actions';

export default function ListContainer() {
  const dispatch = useDispatch();

  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  useEffect(() => {
    dispatch(setRestaurants(restaurants));
  }, [restaurants]);

  return (
    <ol>
      {restaurants && restaurants.map((restaurant) => {
        const restaurantItem = `${restaurant.name} | ${restaurant.type} | ${restaurant.location}`;
        return (
          <li key={restaurant.id}>
            {restaurantItem}
          </li>
        );
      })}
    </ol>
  );
}

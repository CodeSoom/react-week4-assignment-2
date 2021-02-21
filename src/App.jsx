import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RestaurantListContainer from './RestaurantListContainer';
import RestaurantFormContainer from './RestaurantFormContainer';

import {
  setRestaurants,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurants([]));
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantListContainer />
      <RestaurantFormContainer />
    </div>
  );
}

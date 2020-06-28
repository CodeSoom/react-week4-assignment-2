import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';
import RestaurantFormContainer from './RestaurantFormContainer';

import { setInitialRestaurants } from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setInitialRestaurants([]));
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantsContainer />
      <RestaurantFormContainer />
    </div>
  );
}

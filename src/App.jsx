import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { setRestaurants } from './actions';

import RestaurantsContainer from './RestaurantsContainer';

import RestaurantsCreateContainer from './RestaurantsCreateContainer';

import restaurants from '../fixtures/restaurants';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurants(restaurants));
  }, []);

  return (
    <div>
      <h2>Restaurants</h2>
      <RestaurantsContainer />
      <RestaurantsCreateContainer />
    </div>
  );
}

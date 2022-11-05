import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';
import RestaurantsCreateContainer from './RestaurantsCreateContainer';

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
      <RestaurantsContainer />
      <RestaurantsCreateContainer />
    </div>
  );
}

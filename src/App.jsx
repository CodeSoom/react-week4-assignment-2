import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { setRestaurants } from './actions';

import RestaurantsContainer from './RestaurantsContainer';

import RestaurantsCreateContainer from './RestaurantsCreateContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurants([]));
  }, []);

  return (
    <div>
      <h2>Restaurants</h2>
      <RestaurantsContainer />
      <RestaurantsCreateContainer />
    </div>
  );
}

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { setRestaurants } from './actions';

import RestaurantsContainer from './RestaurantsContainer';

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

      <input type="text" id="name" />
      <input type="text" id="category" />
      <input type="text" id="location" />
      <button type="button">등록</button>
    </div>
  );
}

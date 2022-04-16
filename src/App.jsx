import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

import {
  setRestaurants,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  // TOOD: 데이터 넣기
  useEffect(() => {
    dispatch(setRestaurants(restaurants));
  }, []);
  return (
    <div>
      <h1>Restaurans</h1>
      <RestaurantsContainer />
    </div>
  );
}

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RestaurantContainer from './RestaurantsContainer';

import {
  setRestaurants,
} from './actions';

import restaurants from '../fixtures/restaurants';

export default function App() {
  // TODO:
  // 초기 실행 => useEffect
  // restaurants에 데이터 넣기 => dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurants(restaurants));
  }, []);

  return (
    <div>
      <h1>Restautants</h1>
      <RestaurantContainer />
    </div>
  );
}

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';
import RestaurantsCreateContainer from './RestaurantsCreateContainer';

import {
  setRestaurants,
} from './actions';

import restaurants from '../fixtures/restaurants';

export default function App() {
  const dispatch = useDispatch();

  // TODO : 초기 실행
  // restaurants에 데이터 넣기=>dispatch
  useEffect(() => {
    dispatch(setRestaurants(restaurants));
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantsContainer />
      <RestaurantsCreateContainer />
    </div>
  );
}

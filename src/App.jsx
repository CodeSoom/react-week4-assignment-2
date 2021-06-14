import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setRestaurants } from './actions';
import restaurants from '../fixtures/restaurants';
import RestaurantsContainer from './RestaurantsContainer';

export default function App() {
  // 초기 실행 셋팅
  // restaurants에 데이터 넣기 => dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurants(restaurants));
  }, []);

  return (
    <RestaurantsContainer />
  );
}

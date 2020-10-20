import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

import restaurants from '../fixtures/restaurants';

import {
  setRestaurants,
} from './actions';

export default function App() {
  // TODO: 초기 실행
  // restaurants에 데이터 넣기 => dispatch로 => store가 바뀜

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch((setRestaurants(restaurants)));
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantsContainer />
    </div>
  );
}

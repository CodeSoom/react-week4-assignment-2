import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import restaurants from '../fixtures/restaurants';

import {useDispatch} from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

import {
  setRestaurants
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  // TODO: 초기 실행
  // restaurants에 데이터 넣기 => dispatch
  useEffect(()=> {
    dispatch(setRestaurants(restaurants));
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantsContainer/>
    </div>
  );
}

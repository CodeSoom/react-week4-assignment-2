import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RestaurantListContainer from './RestaurantListContainer';

import restaurantList from '../fixtures/restaurantList';

import {
  setRestaurantList,
} from './actions';

export default function App() {
  const dispatch = useDispatch();
  // TODO: 초기 실행
  // restaurantList에 데이터 넣기 => dispatch
  useEffect(() => {
    dispatch(setRestaurantList(restaurantList));
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantListContainer />
    </div>
  );
}

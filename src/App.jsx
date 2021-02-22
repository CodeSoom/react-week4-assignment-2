import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RestaurantListContainer from './RestaurantListContainer';
import RestaurantFormContainer from './RestaurantFormContainer';

import {
  setRestaurants,
} from './actions';

const restaurants = [
  {
    id: 1,
    name: '라이브볼',
    category: '샐러드',
    address: '서울시 신논현동',
  },
];

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurants({ restaurants }));
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantListContainer />
      <RestaurantFormContainer />
    </div>
  );
}

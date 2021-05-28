import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { setRestaurants } from './actions/actions';

import RestaurantsContainer from './container/RestaurantsContainer';
import InputContainer from './container/InputContainer';

export default function App() {
  const dispatch = useDispatch();

  const restaurants = [
    {
      id: 1,
      name: '마녀주방',
      category: '한식',
      address: '서울시 강남구',
    },
    {
      id: 2,
      name: '시카고피자',
      category: '양식',
      address: '이태원동',
    },
  ];

  useEffect(() => {
    dispatch(setRestaurants(restaurants));
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantsContainer />
      <InputContainer />
    </div>
  );
}

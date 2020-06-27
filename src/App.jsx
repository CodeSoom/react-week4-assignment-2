import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import ListContainer from './Component/ListContainer';
import InputContainer from './Component/InputContainer';

import { setRestaurants } from './actions';

import restaurants from '../__mocks__/restaurants';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurants(restaurants));
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <ListContainer />
      <InputContainer />
    </div>
  );
}

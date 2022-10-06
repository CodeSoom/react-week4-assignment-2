import React, { useEffect } from 'react';

// import { useDispatch } from 'react-redux';

import ListContainer from './ListContainer';
import InputContainer from './InputContainer';

// import {
//   setRestaurants,
// } from './actions';

export default function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setRestaurants('addRestaurant'));
  // }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <ListContainer />
      <InputContainer />
    </div>
  );
}
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setRestaurants } from './actions';
import ListContainer from './ListContainer';
import InputContainer from './InputContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurants());
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <ListContainer/>
      <InputContainer/>
    </div>
  );
}

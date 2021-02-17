import React from 'react';
import { useDispatch } from 'react-redux';
import RestaurantInput from './RestaurantInput';

function InputContainer() {
  const dispatch = useDispatch();

  function handleChange(action) {
    dispatch(action);
  }
  return (
    <RestaurantInput onChange={handleChange} />
  );
}

export default InputContainer;

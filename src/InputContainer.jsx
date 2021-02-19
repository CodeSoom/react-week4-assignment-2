import React from 'react';
import { useDispatch } from 'react-redux';
import { updateRestaurantInfo } from './actions';
import RestaurantInput from './RestaurantInput';

function InputContainer() {
  const dispatch = useDispatch();

  function handleChange(event) {
    dispatch(updateRestaurantInfo({ [event.target.name]: event.target.value }));
  }
  return (
    <RestaurantInput onChange={handleChange} />
  );
}

export default InputContainer;

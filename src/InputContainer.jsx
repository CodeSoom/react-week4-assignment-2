import React from 'react';

import { useDispatch } from 'react-redux';

import { updateRestaurantInfo, addRestaurant } from './actions';

import RestaurantInput from './RestaurantInput';

function InputContainer() {
  const dispatch = useDispatch();

  function handleChange(event) {
    dispatch(updateRestaurantInfo({ [event.target.name]: event.target.value }));
  }
  function handleClick() {
    dispatch(addRestaurant());
  }
  return (
    <RestaurantInput onChange={handleChange} onClick={handleClick} />
  );
}

export default InputContainer;

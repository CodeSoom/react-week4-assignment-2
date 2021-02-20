import React from 'react';

import { useDispatch } from 'react-redux';

import { updateRestaurantInfo, addRestaurant } from './actions';

import RestaurantInput from './RestaurantInput';

function InputContainer() {
  const dispatch = useDispatch();

  function handleChange(event) {
    const { name, value } = event.target;

    dispatch(updateRestaurantInfo({ [name]: value }));
  }
  function handleClick() {
    dispatch(addRestaurant());
  }
  return (
    <RestaurantInput onChange={handleChange} onClick={handleClick} />
  );
}

export default InputContainer;

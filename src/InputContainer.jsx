import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Input from './Input';

import {
  updateRestaurant,
  addRestaurant,
} from './actions';

export default function InputContainer() {
  const dispatch = useDispatch();

  const restaurant = useSelector((state) => state.restaurant);

  function handleChangeRestaurant(event) {
    const target = event.target.name;
    const { value } = event.target;

    dispatch(updateRestaurant(target, value));
  }

  function handleClick() {
    dispatch(addRestaurant());
  }

  return (
    <Input
      restaurant={restaurant}
      onChange={handleChangeRestaurant}
      onClick={handleClick}
    />
  );
}

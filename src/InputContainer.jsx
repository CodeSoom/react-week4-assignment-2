import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  updateRestaurant,
  addRestaurant,
} from './actions';

import Input from './Input';

export default function InputContainer() {
  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  const dispatch = useDispatch();

  function handleChange(event) {
    dispatch(updateRestaurant(event.target.name, event.target.value));
  }

  function handleClick() {
    dispatch(addRestaurant());
  }

  return (
    <Input
      restaurant={restaurant}
      onChange={handleChange}
      onClick={handleClick}
    />
  );
}

import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Input from './Input';

import {
  updateRestaurantInformation,
  addRestaurant,
} from '../actions';

export default function InputContainer() {
  const dispatch = useDispatch();

  const restaurant = useSelector((state) => ({
    name: state.name,
    category: state.category,
    address: state.address,
  }));

  function handleInputChange(event) {
    const { name, value } = event.target;
    dispatch(updateRestaurantInformation(name, value));
  }

  function handleClickaddRestaurant() {
    dispatch(addRestaurant());
  }

  return (
    <Input
      restaurant={restaurant}
      onChange={handleInputChange}
      onClick={handleClickaddRestaurant}
    />
  );
}

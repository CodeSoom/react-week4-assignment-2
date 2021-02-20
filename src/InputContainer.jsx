import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Input from './Input';

import {
  updateRestaurantInformation,
  addRestaurantInformation,
} from './actions';

export default function InputContainer() {
  const dispatch = useDispatch();

  const {
    name,
    category,
    address,
  } = useSelector((state) => ({
    name: state.name,
    category: state.category,
    address: state.address,
    restaurants: state.restaurants,
  }));

  function handleChange(event) {
    const { name: targetName, value } = event.target;

    dispatch(updateRestaurantInformation(targetName, value));
  }

  function handleClick() {
    dispatch(addRestaurantInformation());
  }

  return (
    <Input
      name={name}
      category={category}
      address={address}
      onChange={handleChange}
      onClick={handleClick}
    />
  );
}

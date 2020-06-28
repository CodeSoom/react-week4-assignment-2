import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Input from './Input';

import {
  updateRestaurant,
  addRestaurant,
} from './actions';

export default function InputContainer() {
  const dispatch = useDispatch();

  function handleUpdateRestaurant(event) {
    dispatch(updateRestaurant(event.target));
  }

  function handleAddRestaurant() {
    dispatch(addRestaurant());
  }

  const { name, category, address } = useSelector((state) => ({
    name: state.name,
    category: state.category,
    address: state.address,
  }));

  return (
    <Input
      name={name}
      category={category}
      address={address}
      onChange={handleUpdateRestaurant}
      onClick={handleAddRestaurant}
    />
  );
}

import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantForm from './RestaurantForm';

import {
  updateRestaurantInformation,
  addRestaurantInformation,
} from './actions';

export default function RestaurantFormContainer() {
  const dispatch = useDispatch();

  const {
    name,
    category,
    address,
  } = useSelector((state) => ({
    name: state.name,
    category: state.category,
    address: state.address,
  }));

  function handleChange(event) {
    const { name: targetName, value } = event.target;

    dispatch(updateRestaurantInformation(targetName, value));
  }

  function handleClick() {
    dispatch(addRestaurantInformation());
  }

  return (
    <RestaurantForm
      name={name}
      category={category}
      address={address}
      onChange={handleChange}
      onClick={handleClick}
    />
  );
}

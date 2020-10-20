import React from 'react';

import { useDispatch } from 'react-redux';

import {
  addRestaurant,
} from './actions';

import RestaurantForm from './RestaurantForm';

export default function RestaurantCreateContainer() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(addRestaurant());
  }

  return (
    <RestaurantForm onClick={handleClick} />
  );
}

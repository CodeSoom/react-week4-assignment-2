import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  addRestaurant,
} from './actions';

import RestaurantForm from './RestaurantForm';

export default function RestaurantCreateContainer() {
  const dispatch = useDispatch();

  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  function handleClick() {
    dispatch(addRestaurant());
  }

  function handleChange() {
    // todo
  }

  return (
    <RestaurantForm
      restaurant={restaurant}
      onClick={handleClick}
      onChange={handleChange}
    />
  );
}

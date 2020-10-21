import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  addRestaurant,
  changeRestaurant,
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

  function handleChange({ name, value }) {
    dispatch(changeRestaurant({ name, value }));
  }

  return (
    <RestaurantForm
      restaurant={restaurant}
      onClick={handleClick}
      onChange={handleChange}
    />
  );
}

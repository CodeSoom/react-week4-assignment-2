import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantForm from './RestaurantForm';

import {
  changeRestaurantField,
  addRestaurant,
} from './actions';

export default function RestaurantsContainer({ handleClick }) {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(addRestaurant());
  }
  function handleChange({ name, value }) {
    dispatch(changeRestaurantField({ name, value }));
  }
  const { restaurant } = useSelector((state) => {
    state.restaurants;
  });

  return (
    <RestaurantForm
      restaurant={restaurant}
      onChange={handleChange}
      onClick={handleClick}
    />
  );
}

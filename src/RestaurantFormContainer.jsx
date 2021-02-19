import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { addRestaurant, updateRestaurant } from './actions';

import RestaurantForm from './RestaurantForm';

export default function RestaurantFormContainer() {
  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  const dispatch = useDispatch();

  function handleChange(event) {
    const { id, value } = event.target;

    dispatch(updateRestaurant({ [id]: value }));
  }

  function handleClick() {
    dispatch(addRestaurant());
  }

  return (
    <RestaurantForm
      restaurant={restaurant}
      handleChange={handleChange}
      handleClick={handleClick}
    />
  );
}

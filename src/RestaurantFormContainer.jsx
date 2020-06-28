import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { updateRestaurantField, addRestaurant } from './actions';

import RestaurantForm from './RestaurantForm';

export default function RestaurantFormContainer() {
  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  const dispatch = useDispatch();

  function handleChangeField({ name, value }) {
    dispatch(updateRestaurantField({ name, value }));
  }

  function handleClickAddRestaurant() {
    dispatch(addRestaurant());
  }

  return (
    <RestaurantForm
      restaurant={restaurant}
      onChange={handleChangeField}
      onClick={handleClickAddRestaurant}
    />
  );
}

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RestaurantForm from './RestaurantForm';
import {
  changeRestaurant, saveNewRestaurant,
} from './actions';

export default function RestaurantFormContainer() {
  const { newRestaurant } = useSelector((state) => ({
    newRestaurant: state.newRestaurant,
  }));

  const dispatch = useDispatch();

  function handleChange(event) {
    dispatch(changeRestaurant(
      event.target.name,
      event.target.value,
    ));
  }

  function handleClickSubmit(event) {
    event.preventDefault();
    dispatch(saveNewRestaurant());
  }

  return (
    <RestaurantForm
      newRestaurant={newRestaurant}
      handleChange={handleChange}
      handleClickSubmit={handleClickSubmit}
    />
  );
}

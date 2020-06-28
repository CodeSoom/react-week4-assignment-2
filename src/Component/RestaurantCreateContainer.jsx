import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantCreator from './RestaurantCreator';

import {
  updateRestaurantInformation,
  addRestaurant,
} from '../actions';

export default function RestaurantCreate() {
  const dispatch = useDispatch();

  const restaurant = useSelector((state) => ({
    name: state.name,
    category: state.category,
    address: state.address,
  }));

  function handleInputChange(event) {
    const { name, value } = event.target;
    dispatch(updateRestaurantInformation(name, value));
  }

  function handleClickaddRestaurant() {
    dispatch(addRestaurant());
  }

  return (
    <RestaurantCreator
      restaurant={restaurant}
      onChange={handleInputChange}
      onClick={handleClickaddRestaurant}
    />
  );
}

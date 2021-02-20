import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { addRestaurant, updateRestaurant } from './actions';

import RestaurantForm from './RestaurantForm';

export default function RestaurantFormContainer() {
  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  const restaurantData = Object.values(restaurant);

  const dispatch = useDispatch();

  function handleChange(event) {
    const { name, value } = event.target;

    dispatch(updateRestaurant({ [name]: value }));
  }

  function handleClick() {
    if (!restaurantData.includes('')) {
      dispatch(addRestaurant());
    }
  }

  return (
    <RestaurantForm
      restaurant={restaurant}
      handleChange={handleChange}
      handleClick={handleClick}
    />
  );
}

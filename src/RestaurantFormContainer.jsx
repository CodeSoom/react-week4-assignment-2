import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { addRestaurant, updateRestaurant } from './actions';

import RestaurantForm from './RestaurantForm';

export default function RestaurantFormContainer() {
  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  const dispatch = useDispatch();

  const ids = {
    name: (value) => ({ name: value }),
    category: (value) => ({ category: value }),
    address: (value) => ({ address: value }),
  };

  function handleChange(event) {
    const { id, value } = event.target;

    dispatch(updateRestaurant(ids[id](value)));
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

import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantForm from './RestaurantForm';

import {
  updateInformation,
  addInformation,
  initializeRestaurantForm,
} from './actions';

export default function RestaurantFormContainer() {
  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updateInformation(e.target));
  };

  const handleClick = () => {
    dispatch(addInformation(restaurant));

    dispatch(initializeRestaurantForm());
  };

  return (
    <RestaurantForm
      onChange={handleChange}
      onClick={handleClick}
      restaurant={restaurant}
    />
  );
}

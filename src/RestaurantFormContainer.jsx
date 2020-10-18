import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addRestaurant, updateRestaurant } from './actions';

import RestaurantForm from './RestaurantForm';

export default function FormContainer() {
  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  const dispatch = useDispatch();

  const handleClickAddRestaurant = () => {
    dispatch(addRestaurant());
  };

  const getHandleChagneRestaurant = (field) => (event) => {
    dispatch(updateRestaurant(field, event.target.value));
  };

  return (
    <RestaurantForm
      restaurant={restaurant}
      onClickAdd={handleClickAddRestaurant}
      getOnChangeRestaurant={getHandleChagneRestaurant}
    />
  );
}

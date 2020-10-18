import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addRestaurant, updateRestaurant } from './actions';

import RestaurantForm from './RestaurantForm';

export default function RestaurantFormContainer() {
  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  const dispatch = useDispatch();

  const handleClickAddRestaurant = () => {
    dispatch(addRestaurant());
  };

  const handleChangeRestaurantField = (event) => {
    const { name, value } = event.target;

    dispatch(updateRestaurant(name, value));
  };

  return (
    <RestaurantForm
      restaurant={restaurant}
      onClickAddRestaurant={handleClickAddRestaurant}
      onChangeRestaurantField={handleChangeRestaurantField}
    />
  );
}

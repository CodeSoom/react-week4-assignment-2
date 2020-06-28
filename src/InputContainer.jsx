import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { updateRestaurantField, addRestaurant } from './actions';

import Input from './Input';

export default function InputContainer() {
  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  const dispatch = useDispatch();

  function handleChangeTitle({ name, value }) {
    dispatch(updateRestaurantField({ name, value }));
  }

  function handleClickAddRestaurant() {
    dispatch(addRestaurant());
  }

  return (
    <Input
      restaurant={restaurant}
      onChange={handleChangeTitle}
      onClick={handleClickAddRestaurant}
    />
  );
}

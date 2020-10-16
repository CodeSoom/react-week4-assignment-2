import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  updateRestaurantName,
  updateRestaurantCategory,
  updateRestaurantAddress,
  addRestaurant,
} from './actions';

import Input from './Input';

export default function InputContainer() {
  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  const dispatch = useDispatch();

  function handleChangeName(event) {
    dispatch(updateRestaurantName(event.target.value));
  }

  function handleChangeCategory(event) {
    dispatch(updateRestaurantCategory(event.target.value));
  }

  function handleChangeAddress(event) {
    dispatch(updateRestaurantAddress(event.target.value));
  }

  function handleClick() {
    dispatch(addRestaurant());
  }

  return (
    <Input
      restaurant={restaurant}
      onChangeName={handleChangeName}
      onChangeCategory={handleChangeCategory}
      onChangeAddress={handleChangeAddress}
      onClick={handleClick}
    />
  );
}

import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Input from './Input';

import {
  updateRestaurantName,
  updateRestaurantCategory,
  updateRestaurantAddress,
} from './actions';

export default function InputContainer() {
  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));
  const dispatch = useDispatch();

  function handleChangeRestaurantName(event) {
    dispatch(updateRestaurantName(event.target.value));
  }

  function handleChangeRestaurantCategory(event) {
    dispatch(updateRestaurantCategory(event.target.value));
  }

  function handleChangeRestaurantAddress(event) {
    dispatch(updateRestaurantAddress(event.target.value));
  }

  return (
    <Input
      value={restaurant}
      onChangeName={handleChangeRestaurantName}
      onChangeCategory={handleChangeRestaurantCategory}
      onChangeAddress={handleChangeRestaurantAddress}
    />
  );
}

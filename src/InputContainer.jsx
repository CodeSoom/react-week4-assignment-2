import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { updateRestaurantName } from './actions';

import Input from './Input';

export default function InputContainer() {
  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  const dispatch = useDispatch();

  function handleChangeName(event) {
    dispatch(updateRestaurantName(event.target.value));
  }

  function handleChangeCategory() {
  }

  function handleChangeAddress() {
  }

  function handleClick() {
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

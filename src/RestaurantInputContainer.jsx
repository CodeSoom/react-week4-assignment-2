import React from 'react';

import { useDispatch } from 'react-redux';

import {
  addRestaurants,
  changeName,
  changeType,
  changeAddress,
} from './actions';

import RestaurantInput from './RestaurantInput';

export default function RestaurantInputContainer() {
  const dispatch = useDispatch();

  const handleClickAddRestaurants = () => {
    dispatch(addRestaurants());
  };

  const handleChangeName = (value) => {
    dispatch(changeName(value));
  };

  const handleChangeType = (value) => {
    dispatch(changeType(value));
  };

  const handleChangeAddress = (value) => {
    dispatch(changeAddress(value));
  };

  return (
    <RestaurantInput
      onChangeName={handleChangeName}
      onChangeType={handleChangeType}
      onChangeAddress={handleChangeAddress}
      onClickAddRestaurant={handleClickAddRestaurants}
    />
  );
}

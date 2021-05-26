import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  addRestaurants,
  changeName,
  changeType,
  changeAddress,
} from './actions';

import RestaurantInput from './RestaurantInput';

export default function RestaurantInputContainer() {
  const { name, type, address } = useSelector((state) => ({
    name: state.name,
    type: state.type,
    address: state.address,
  }));

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
      name={name}
      type={type}
      address={address}
      onChangeName={handleChangeName}
      onChangeType={handleChangeType}
      onChangeAddress={handleChangeAddress}
      onClickAddRestaurant={handleClickAddRestaurants}
    />
  );
}

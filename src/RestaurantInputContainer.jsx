import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  addRestaurants,
  changeInputAttribute,
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
    dispatch(changeInputAttribute('changeName', value));
  };

  const handleChangeType = (value) => {
    dispatch(changeInputAttribute('changeType', value));
  };

  const handleChangeAddress = (value) => {
    dispatch(changeInputAttribute('changeAddress', value));
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

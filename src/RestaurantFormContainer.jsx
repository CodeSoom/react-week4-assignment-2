import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantForm from './RestaurantForm';

import {
  changeName, changeType, changeAddress, addRestaurant,
} from './action';

function selector(state) {
  return {
    restaurant: state.restaurant,
  };
}

export default function RestaurantFormContainer() {
  const { restaurant } = useSelector(selector);

  const dispatch = useDispatch();

  function handleChangeName(event) {
    dispatch(changeName(event.target.value));
  }

  function handleChangeType(event) {
    dispatch(changeType(event.target.value));
  }

  function handleChangeAddress(event) {
    dispatch(changeAddress(event.target.value));
  }

  function handleAddRestaurant() {
    dispatch(addRestaurant());
  }

  return (
    <RestaurantForm
      restaurant={restaurant}
      onChangeName={handleChangeName}
      onChangeType={handleChangeType}
      onChangeAddress={handleChangeAddress}
      onClickAddRestaurant={handleAddRestaurant}
    />
  );
}

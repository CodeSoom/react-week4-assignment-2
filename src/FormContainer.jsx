import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  updateRestaurantName,
  updateRestaurantType,
  updateRestaurantLocation,
  addRestaurantInfo,
} from './actions';

import Form from './Form';

export default function FormContainer() {

  const dispatch = useDispatch();

  const { restaurantInfo } = useSelector((state) => state);

  function handleClickAdd() {
    dispatch(addRestaurantInfo(restaurantInfo));
  }

  function handleChangeRestaurantName(event) {
    dispatch(updateRestaurantName(event.target.value));
  }

  function handleChangeRestaurantType(event) {
    dispatch(updateRestaurantType(event.target.value));
  }

  function handleChangeRestaurantLocation(event) {
    dispatch(updateRestaurantLocation(event.target.value));
  }

  return (
    <Form
      restaurantInfo={restaurantInfo}
      handleClickAdd={handleClickAdd}
      handleChangeRestaurantName={handleChangeRestaurantName}
      handleChangeRestaurantType={handleChangeRestaurantType}
      handleChangeRestaurantLocation={handleChangeRestaurantLocation}
    />
  );
}

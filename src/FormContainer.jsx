import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  updateRestaurantInfo,
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
    const updateInfo = { type: 'name', value: event.target.value };
    dispatch(updateRestaurantInfo(updateInfo));
  }

  function handleChangeRestaurantType(event) {
    const updateInfo = { type: 'type', value: event.target.value };
    dispatch(updateRestaurantInfo(updateInfo));
  }

  function handleChangeRestaurantLocation(event) {
    const updateInfo = { type: 'location', value: event.target.value };
    dispatch(updateRestaurantInfo(updateInfo));
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

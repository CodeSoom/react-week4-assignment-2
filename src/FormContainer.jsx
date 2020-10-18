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

  function handleChangeRestaurantInfo(event) {
    const updateInfo = {
      type: event.target.name,
      value: event.target.value,
    };

    dispatch(updateRestaurantInfo(updateInfo));
  }

  return (
    <Form
      restaurantInfo={restaurantInfo}
      handleClickAdd={handleClickAdd}
      handleChangeRestaurantInfo={handleChangeRestaurantInfo}
    />
  );
}

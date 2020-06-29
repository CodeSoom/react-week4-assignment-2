import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Inputs from '../Components/Inputs';

import {
  updateRestaurantName,
  updateRestaurantCategory,
  updateRestaurantAddress,
  addRestaurant,
} from '../Action/actions';

export default function InputsContainer() {
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

  function handleClickAddRestaurant() {
    dispatch(addRestaurant());
  }

  return (
    <Inputs
      value={restaurant}
      onChanges={{
        name: handleChangeRestaurantName,
        category: handleChangeRestaurantCategory,
        address: handleChangeRestaurantAddress,
      }}
      onClick={handleClickAddRestaurant}
    />
  );
}

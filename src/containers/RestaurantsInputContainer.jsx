import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  updateRestaurantInfo, addRestaurant,
} from '../stores/action/action-creators';

import InputBox from '../components/InputBox';
import AddButton from '../components/AddButton';

export default function RestaurantsInputContainer() {
  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  const dispatch = useDispatch();

  function handleUpdateRestaurantInfo(ev) {
    dispatch(updateRestaurantInfo(ev.target.name, ev.target.value));
  }

  function handleAddRestaurant() {
    dispatch(addRestaurant());
  }

  return (
    <>
      <InputBox inputProperty="name" inputValue={restaurant.name} handleChangeInputValue={handleUpdateRestaurantInfo} />
      <InputBox inputProperty="category" inputValue={restaurant.category} handleChangeInputValue={handleUpdateRestaurantInfo} />
      <InputBox inputProperty="address" inputValue={restaurant.address} handleChangeInputValue={handleUpdateRestaurantInfo} />
      <AddButton handleClickButton={handleAddRestaurant} />
    </>
  );
}

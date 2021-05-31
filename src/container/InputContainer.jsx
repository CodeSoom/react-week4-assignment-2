import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addRestaurant, changeRestaurant } from '../actions/actions';

import Input from '../presentational/Input';

export default function InputContainer() {
  const dispatch = useDispatch();

  const restaurant = useSelector((state) => ({
    name: state.name,
    category: state.category,
    address: state.address,
  }));

  function handleChange({ name, value }) {
    dispatch(changeRestaurant({ name, value }));
  }

  function handleClickAddRestaurant() {
    dispatch(addRestaurant());
  }

  return (
    <Input
      name={restaurant.name}
      category={restaurant.category}
      address={restaurant.address}
      onChange={handleChange}
      onClickAddRestaurant={handleClickAddRestaurant}
    />
  );
}

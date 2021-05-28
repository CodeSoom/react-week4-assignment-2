import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addRestaurant } from '../actions/actions';

import Input from '../presentational/Input';

export default function InputContainer() {
  const dispatch = useDispatch();

  const { name, category, address } = useSelector((state) => ({
    name: state.name,
    category: state.category,
    address: state.address,
  }));

  function handleChange(action) {
    dispatch(action);
  }

  function handleClickAddRestaurant() {
    dispatch(addRestaurant());
  }

  return (
    <Input
      name={name}
      category={category}
      address={address}
      onChange={handleChange}
      onClickAddRestaurant={handleClickAddRestaurant}
    />
  );
}

import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Input from './Input';

import {
  updateRestaurant,
  addRestaurant,
} from './actions';

export default function InputContainer() {
  const dispatch = useDispatch();

  function handleChange(event) {
    dispatch(updateRestaurant(event.target));
  }

  function handleAddRestaurant() {
    dispatch(addRestaurant());
  }

  const { title, kind, address } = useSelector((state) => ({
    title: state.title,
    kind: state.kind,
    address: state.address,
  }));

  return (
    <Input
      title={title}
      kind={kind}
      address={address}
      onChange={handleChange}
      onClickAddRestaurant={handleAddRestaurant}
    />
  );
}

import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Input from './Input';

import {
  updateRestaurantInformation,
  addInformation,
} from '../actions';

export default function InputContainer() {
  const dispatch = useDispatch();

  const information = useSelector((state) => ({
    name: state.name,
    category: state.category,
    address: state.address,
  }));

  function handleInputChange(event) {
    const { name, value } = event.target;
    dispatch(updateRestaurantInformation(name, value));
  }

  function handleClickAddInformation() {
    dispatch(addInformation());
  }

  return (
    <Input
      information={information}
      onChange={handleInputChange}
      onClick={handleClickAddInformation}
    />
  );
}

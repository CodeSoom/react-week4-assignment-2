import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Form from './Form';

import {
  updateText,
  addRestaurant,
} from './actions';

export default function FormContainer() {
  const dispatch = useDispatch();

  const { inputs } = useSelector((state) => ({
    inputs: state.inputs,
  }));

  function handleChangeText(name, event) {
    dispatch(updateText(name, event.target.value));
  }

  function handleClickAddRestaurant() {
    dispatch(addRestaurant());
  }

  return (
    <Form
      inputs={inputs}
      onChange={handleChangeText}
      onClick={handleClickAddRestaurant}
    />
  );
}

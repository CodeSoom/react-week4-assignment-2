import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Form from './Form';

import {
  addRestaurant,
  updateInputText,
} from './actions';

export default function FormContainer() {
  const dispatch = useDispatch();

  const state = useSelector(({ restaurants, inputs }) => ({
    restaurants,
    inputs,
  }));

  function handleChangeInput(placeholder, value) {
    dispatch(state, updateInputText(placeholder, value));
  }

  function handleClickAddRestautant() {
    dispatch(state, addRestaurant());
  }

  return (
    <Form
      inputs={state.inputs}
      onChangeInput={handleChangeInput}
      onClickAddRestautant={handleClickAddRestautant}
    />
  );
}

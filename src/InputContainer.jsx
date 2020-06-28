import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Input from './Input';

import {
  updateTitle,
  addRestaurant,
} from './actions';

export default function InputContainer() {
  const dispatch = useDispatch();

  function handleChangeTitle(event) {
    dispatch(updateTitle(event.target.value));
  }

  function handleAddRestaurant() {
    dispatch(addRestaurant());
  }

  const { title } = useSelector((state) => ({
    title: state.title,
  }));

  return (
    <Input
      title={title}
      onChangeTitle={handleChangeTitle}
      onClickAddRestaurant={handleAddRestaurant}
    />
  );
}

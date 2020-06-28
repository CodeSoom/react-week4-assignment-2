import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Input from './Input';

import {
  updateTitle,
} from './actions';

export default function InputContainer() {
  const dispatch = useDispatch();

  function handleChangeTitle(event) {
    dispatch(updateTitle(event.target.value));
  }

  const { title } = useSelector((state) => ({
    title: state.title,
  }));

  return (
    <Input
      title={title}
      onChangeTitle={handleChangeTitle}
    />
  );
}

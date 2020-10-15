import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Form from './Form';

export default function FormContainer() {
  const dispatch = useDispatch();

  const { inputs } = useSelector((state) => ({
    inputs: state.inputs,
  }));

  function handleChangeInput() {
    dispatch();
  }

  return (
    <Form inputs={inputs} onChangeInput={handleChangeInput} />
  );
}

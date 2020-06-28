import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Form from './Form';

import { registerRestaurant, updateInput } from './actions';

export default function FormContainer() {
  const dispatch = useDispatch();
  const { input } = useSelector((state) => ({
    input: state.input,
  }));

  const handleSubmit = (event) => {
    dispatch(registerRestaurant());
    event.preventDefault();
  };

  const handleChangeInput = (e) => {
    dispatch(updateInput({
      name: e.target.name,
      value: e.target.value,
    }));
  };

  return (
    <>
      <Form
        value={input}
        onChangeInput={handleChangeInput}
        onSubmit={handleSubmit}
      />
    </>
  );
}

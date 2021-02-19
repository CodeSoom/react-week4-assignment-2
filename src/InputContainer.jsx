import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Input from './Input';

import { updateInputText, addRegister } from './actions';

export default function InputContainer() {
  const { name, category, address } = useSelector((state) => ({
    name: state.name,
    category: state.category,
    address: state.address,
  }));

  const dispatch = useDispatch();

  function handleTextChange(event) {
    dispatch(updateInputText(event.target));
  }

  function handleRegisterClick() {
    dispatch(addRegister());
  }
  return (
    <Input
      name={name}
      category={category}
      address={address}
      onChange={handleTextChange}
      onClick={handleRegisterClick}
    />
  );
}

import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Input from './Input';

function updateInputText(target) {
  return {
    type: 'updateInputText',
    payload: { [target.name]: target.value },
  };
}

function addRegister() {
  return {
    type: 'addRegister',
  };
}

export default function InputContainer() {
  const { restaurant, type, address } = useSelector((state) => ({
    restaurant: state.restaurant,
    type: state.type,
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
      restaurant={restaurant}
      type={type}
      address={address}
      onChange={handleTextChange}
      onClick={handleRegisterClick}
    />
  );
}

import React from 'react';

import { useSelector } from 'react-redux';

import Input from './Input';

export default function InputContainer() {
  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  function handleChangeName() {
  }

  function handleChangeCategory() {
  }

  function handleChangeAddress() {
  }

  function handleClick() {
  }

  return (
    <Input
      restaurant={restaurant}
      onChangeName={handleChangeName}
      onChangeCategory={handleChangeCategory}
      onChangeAddress={handleChangeAddress}
      onClick={handleClick}
    />
  );
}

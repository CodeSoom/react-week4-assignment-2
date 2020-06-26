import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Input from './Input';

import {
  updateName,
  updateCategory,
  updateAddress,
  addInformation,
} from '../actions';

export default function InputContainer() {
  const dispatch = useDispatch();

  const information = useSelector((state) => ({
    name: state.name,
    category: state.category,
    address: state.address,
  }));

  const changeHandlers = {
    handleChangeName: (name) => dispatch(updateName(name)),
    handleChangeCategory: (category) => dispatch(updateCategory(category)),
    handleChangeAddress: (address) => dispatch(updateAddress(address)),
  };

  function handleClickAddInformation() {
    dispatch(addInformation());
  }

  return (
    <Input
      information={information}
      onChangeHandlers={changeHandlers}
      onClick={handleClickAddInformation}
    />
  );
}

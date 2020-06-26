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
    handleChangeName: (event) => dispatch(updateName(event.target.value)),
    handleChangeCategory: (event) => dispatch(updateCategory(event.target.value)),
    handleChangeAddress: (event) => dispatch(updateAddress(event.target.value)),
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

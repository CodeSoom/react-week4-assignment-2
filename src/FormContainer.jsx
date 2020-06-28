import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Form from './Form';

import {
  updateName,
  updateClassify,
  updateAddress,
  addRestaurant,
} from '../redux/action';

export default function FormContainer() {
  const { name, classify, address } = useSelector((state) => ({
    name: state.name,
    classify: state.classify,
    address: state.address,
  }));

  const dispatch = useDispatch();

  function handleChangName(event) {
    dispatch(updateName(event.target.value));
  }

  function handleChangeClassify(event) {
    dispatch(updateClassify(event.target.value));
  }

  function handleChangeAddress(event) {
    dispatch(updateAddress(event.target.value));
  }

  function handleSubmitAddRestaurant(event) {
    event.preventDefault();
    dispatch(addRestaurant());
  }

  return (
    <Form
      nameValue={name}
      classifyValue={classify}
      addressValue={address}
      onChangeName={handleChangName}
      onChangeClassify={handleChangeClassify}
      onChangeAddress={handleChangeAddress}
      onSubmit={handleSubmitAddRestaurant}
    />
  );
}

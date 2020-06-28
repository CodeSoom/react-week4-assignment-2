import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Form from './Form';

import {
  updateName,
  updateCategory,
  updateAddress,
  addRestaurant,
} from '../redux/actions';

export default function FormContainer() {
  const { name, category, address } = useSelector((state) => ({
    name: state.name,
    category: state.category,
    address: state.address,
  }));

  const dispatch = useDispatch();

  function handleChangName(event) {
    dispatch(updateName(event.target.value));
  }

  function handleChangeCategory(event) {
    dispatch(updateCategory(event.target.value));
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
      categoryValue={category}
      addressValue={address}
      onChangeName={handleChangName}
      onChangeCategory={handleChangeCategory}
      onChangeAddress={handleChangeAddress}
      onSubmit={handleSubmitAddRestaurant}
    />
  );
}

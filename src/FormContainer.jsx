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

  const actionCreator = {
    name: (value) => updateName(value),
    category: (value) => updateCategory(value),
    address: (value) => updateAddress(value),
  };

  function handleInputChange(event) {
    const { value, name: inputName } = event.target;

    dispatch(actionCreator[inputName](value));
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
      onChange={handleInputChange}
      onSubmit={handleSubmitAddRestaurant}
    />
  );
}

import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import InputForm from './InputForm';

export default function InputFormContainer() {
  const dispatch = useDispatch();

  const { name, category, address } = useSelector((state) => ({
    name: state.name,
    category: state.category,
    address: state.address,
  }));

  return (
    <InputForm
      nameValue={name}
      categoryValue={category}
      addressValue={address}
      onChange={dispatch}
      onClick={dispatch}
    />
  );
}

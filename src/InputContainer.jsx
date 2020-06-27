import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addRestaurant, updateInput } from './actions';

import Input from './Input';

export default function InputContainer() {
  const dispatch = useDispatch();

  const { name, category, address } = useSelector((selector) => ({
    name: selector.input.name,
    category: selector.input.category,
    address: selector.input.address,
  }));

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    dispatch(updateInput({
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addRestaurant({
      name: e.target[0] ? e.target[0].value : '',
      category: e.target[1] ? e.target[1].value : '',
      address: e.target[2] ? e.target[2].value : '',
    }));
  };

  return (
    <Input
      onChange={handleInputChange}
      onClick={handleSubmit}
      name={name}
      category={category}
      address={address}
    />
  );
}

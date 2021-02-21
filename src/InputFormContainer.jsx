import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { updateInput, addRestaurants } from './actions';

import InputForm from './InputForm';

export default function InputFormContainer() {
  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;
    return dispatch(updateInput(name, value));
  }

  function handleClick() {
    return dispatch(addRestaurants());
  }

  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  return (
    <InputForm
      restaurant={restaurant}
      onChange={handleChange}
      onClick={handleClick}
    />
  );
}

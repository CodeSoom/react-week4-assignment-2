import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Form from './Form';
import { addRestaurant, updateRestaurant } from './actions';
import Button from './Button';

export default function InputContainer() {
  const dispatch = useDispatch();

  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  function handleChangeRestaurant(event) {
    const { value, name } = event.target;

    dispatch(updateRestaurant({ value, name }));
  }

  function handleClickSubmit() {
    dispatch(addRestaurant());
  }

  return (
    <>
      <Form
        restaurant={restaurant}
        onChange={handleChangeRestaurant}
      />
      <Button onClick={handleClickSubmit} />
    </>
  );
}

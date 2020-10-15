import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Form from './Form';

import updateRestaurant from './actions';

export default function FormContainer() {
  const { restaurant, placeholders } = useSelector((state) => ({
    restaurant: state.restaurant,
    placeholders: state.placeholders,
  }));

  const dispatch = useDispatch();

  function handleChangeRestaurant(event) {
    dispatch(updateRestaurant(event.target.placeholder, event.target.value));
  }

  return (
    <div>
      <Form
        placeholders={placeholders}
        restaurant={restaurant}
        onChange={handleChangeRestaurant}
      />
    </div>
  );
}

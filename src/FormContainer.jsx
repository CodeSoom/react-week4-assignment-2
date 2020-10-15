import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addRestaurant, updateRestaurant } from './actions';

import Form from './Form';

export default function App() {
  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  const dispatch = useDispatch();

  const handleClickAdd = () => {
    dispatch(addRestaurant());
  };

  const handleChange = (field) => (event) => {
    dispatch(updateRestaurant(field, event.target.value));
  };

  return (
    <Form
      restaurant={restaurant}
      onClick={handleClickAdd}
      onChange={handleChange}
    />
  );
}

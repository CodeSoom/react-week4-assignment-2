import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import List from './List';
import Form from './Form';

import { registerRestaurant, updateInput } from './actions';

export default function App() {
  const dispatch = useDispatch();
  const { restaurants, input } = useSelector((state) => ({
    restaurants: state.restaurants,
    input: state.input,
  }));

  const handleSubmit = (event) => {
    dispatch(registerRestaurant());
    event.preventDefault();
  };

  const handleChangeInput = ({ name, value }) => {
    dispatch(updateInput({ name, value }));
  };

  return (
    <>
      <h1>Restaurants</h1>
      <List
        restaurants={restaurants}
      />
      <Form
        value={input}
        onChangeInput={handleChangeInput}
        onSubmit={handleSubmit}
      />
    </>
  );
}

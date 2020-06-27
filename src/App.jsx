import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Form from './Form';

import { registerRestaurant, updateInput } from './actions';
import ListContainer from './ListContainer';

export default function App() {
  const dispatch = useDispatch();
  const { input } = useSelector((state) => ({
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
      <ListContainer />
      <Form
        value={input}
        onChangeInput={handleChangeInput}
        onSubmit={handleSubmit}
      />
    </>
  );
}

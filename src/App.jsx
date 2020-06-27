import React, { useState } from 'react';

import List from './List';
import Form from './Form';

export default function App() {
  const [state, setState] = useState({
    id: 1,
    input: {
      name: '',
      category: '',
      address: '',
    },
    restaurants: [],
  });

  const handleSubmit = (event) => {
    setState({
      ...state,
      id: state.id + 1,
      input: {
        name: '',
        category: '',
        address: '',
      },
      restaurants: [
        ...state.restaurants,
        {
          id: state.id,
          name: state.input.name,
          category: state.input.category,
          address: state.input.address,
        },
      ],
    });
    event.preventDefault();
  };

  const handleChangeInput = ({ name, value }) => {
    setState({
      ...state,
      input: {
        ...state.input,
        [name]: value,
      },
    });
  };

  return (
    <>
      <h1>Restaurants</h1>
      <List
        restaurants={state.restaurants}
      />
      <Form
        value={state.input}
        onChangeInput={handleChangeInput}
        onSubmit={handleSubmit}
      />
    </>
  );
}

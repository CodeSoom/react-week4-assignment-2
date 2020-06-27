import React, { useState } from 'react';

import List from './List';

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

  const handleChaneInput = (event) => {
    setState({
      ...state,
      input: {
        ...state.input,
        [event.target.name]: event.target.value,
      },
    });
  };

  return (
    <>
      <h1>Restaurants</h1>
      <List
        restaurants={state.restaurants}
      />
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          value={state.input.name}
          onChange={handleChaneInput}
          placeholder="이름"
        />
        <input
          name="category"
          type="text"
          value={state.input.category}
          onChange={handleChaneInput}
          placeholder="분류"
        />
        <input
          name="address"
          type="text"
          value={state.input.address}
          onChange={handleChaneInput}
          placeholder="주소"
        />
        <button
          type="submit"
        >
          등록
        </button>
      </form>
    </>
  );
}

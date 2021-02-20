import React, { useState } from 'react';

import Reserve from './Reserve';
import List from './List';

export default function App() {
  const [state, setState] = useState({
    id: 0,
    name: '',
    category: '',
    address: '',
    reservations: [],
  });

  const {
    id, name, category,
    address, reservations,
  } = state;

  function handleChange(event) {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  }

  function handleClick() {
    setState({
      ...state,
      id: id + 1,
      name: '',
      category: '',
      address: '',
      reservations: [
        ...reservations,
        {
          id, name, category, address,
        },
      ],
    });
  }

  return (
    <div>
      <h1>Restaurants</h1>
      <List
        reservations={reservations}
      />
      <Reserve
        name={name}
        category={category}
        address={address}
        onChange={handleChange}
        onClick={handleClick}
      />
    </div>
  );
}

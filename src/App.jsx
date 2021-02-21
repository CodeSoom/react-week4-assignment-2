import React, { useState } from 'react';

import Reserve from './Reserve';
import List from './List';

const initialState = {
  id: 0,
  name: '',
  category: '',
  address: '',
  reservations: [],
};

function updateReservations(state, key, value) {
  return {
    ...state,
    [key]: value,
  };
}

function addReservations() {

}

export default function App() {
  const [state, setState] = useState(initialState);

  const {
    name, category,
    address, reservations,
  } = state;

  function handleChange(event) {
    setState(updateReservations(state, event.target.name, event.target.value));
  }

  function handleClick() {
    setState(addReservations(state));
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

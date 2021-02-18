import React, { useState } from 'react';

import Input from './Input';

function List({ restaurants }) {
  return (
    <div>
      { JSON.stringify(restaurants) }
    </div>
  );
}

export default function App() {
  const [state, setState] = useState({
    name: '',
    type: '',
    address: '',
    restaurants: [],
  });

  const {
    name,
    type,
    address,
    restaurants,
  } = state;

  function handleChange(event) {
    const { name: targetName, value } = event.target;
    setState({
      ...state,
      [targetName]: value,
    });
  }

  function handleClick() {
    setState({
      ...state,
      restaurants: [
        ...state.restaurants,
        {
          name: state.name,
          type: state.type,
          address: state.address,
        },
      ],
    });
  }

  return (
    <div>
      <h1>Restaurants</h1>
      <List
        restaurants={restaurants}
      />
      <Input
        name={name}
        type={type}
        address={address}
        onChange={handleChange}
        onClick={handleClick}
      />
    </div>
  );
}

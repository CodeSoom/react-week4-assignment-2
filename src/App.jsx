import React, { useState } from 'react';

import List from './List';
import Input from './Input';

export default function App() {
  const [state, setState] = useState({
    id: 0,
    name: '',
    category: '',
    address: '',
    restaurants: [],
  });

  const {
    name,
    category,
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
      id: state.id + 1,
      name: '',
      category: '',
      address: '',
      restaurants: [
        ...state.restaurants,
        {
          id: state.id,
          name: state.name,
          category: state.category,
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
        category={category}
        address={address}
        onChange={handleChange}
        onClick={handleClick}
      />
    </div>
  );
}

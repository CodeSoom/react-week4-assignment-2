import React, { useState } from 'react';

import Input from './Input';

export default function App() {
  const [state, setstate] = useState({
    name: '',
    type: '',
    address: '',
  });

  const {
    name,
    type,
    address,
  } = state;

  function handleChange(event) {
    const { name: targetName, value } = event.target;
    setstate({
      ...state,
      [targetName]: value,
    });
  }

  function handleClick() {

  }

  return (
    <div>
      <h1>Restaurants</h1>
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

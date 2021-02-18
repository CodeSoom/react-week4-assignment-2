import React, { useState } from 'react';

import Input from './Input';

export default function App() {
  const [state, setstate] = useState({
    name: '',
  });

  const { name } = state;

  function handleChange(event) {
    const { name: targetName, value } = event.target;
    setstate({
      ...state,
      [targetName]: value,
    });
  }

  return (
    <div>
      <h1>Restaurants</h1>
      <Input
        name={name}
        onChange={handleChange}
      />
    </div>
  );
}

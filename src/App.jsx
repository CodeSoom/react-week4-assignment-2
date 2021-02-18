import React, { useState } from 'react';

import InputForm from './InputForm';

export default function App() {
  const [state, setState] = useState({
    name: '',
  });

  const { name } = state;

  function updateName(event) {
    setState({
      ...state,
      name: event.target.value,
    });
  }

  return (
    <div>
      <h1>Restaurants</h1>
      <InputForm
        nameValue={name}
        categoryValue
        addressValue
        onChange={updateName}
        onClick
      />
    </div>
  );
}

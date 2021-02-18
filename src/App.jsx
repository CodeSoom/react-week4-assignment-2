import React, { useState } from 'react';

import InputForm from './InputForm';

export default function App() {
  const [state, setState] = useState({
    name: '',
    category: '',
    address: '',
  });

  const { name, category, address } = state;

  function updateInput(event) {
    if (event.target.name === '이름') {
      setState({
        ...state,
        name: event.target.value,
      });
    }

    if (event.target.name === '종류') {
      setState({
        ...state,
        category: event.target.value,
      });
    }

    if (event.target.name === '주소') {
      setState({
        ...state,
        address: event.target.value,
      });
    }
  }

  return (
    <div>
      <h1>Restaurants</h1>
      <InputForm
        nameValue={name}
        categoryValue={category}
        addressValue={address}
        onChange={updateInput}
        onClick
      />
    </div>
  );
}

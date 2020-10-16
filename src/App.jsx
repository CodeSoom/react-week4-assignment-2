import React, { useState } from 'react';

import { useSelector, useDispatch } from 'redux';
import Input from './Input';
import List from './List';

export default function App() {
  const initialState = {
    nameTitle: '',
    classification: '',
    location: '',
  };

  const [inputState, setInput] = useState(initialState);

  const [state, setState] = useState({
    newId: 100,
    restaurants: [],
  });

  const { nameTitle, classification, location } = inputState;

  const { newId, restaurants } = state;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...inputState,
      [name]: value,
    });
  };

  const handleClick = () => {
    setState({
      newId: newId + 1,
      restaurants: [
        ...restaurants,
        {
          id: newId,
          nameTitle,
          classification,
          location,
        },
      ],
    });

    setInput({
      ...initialState,
    });
  };

  return (
    <>
      <List restaurants={restaurants} />
      <Input
        onChange={handleChange}
        onClick={handleClick}
        inputState={inputState}
      />
    </>
  );
}

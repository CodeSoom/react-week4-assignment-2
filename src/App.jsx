import React, { useState } from 'react';

import { useSelector, useDispatch } from 'redux';
import Input from './Input';
import List from './List';

const initialState = {
  nameTitle: '',
  classification: '',
  location: '',
};

function reducer(state = initialState, action) {

}



function updateInformation(inputState, { name, value }) {
  return {
    ...inputState,
    [name]: value,
  };
}

function addInformation({ newId, restaurants }, { nameTitle, classification, location }) {
  return {
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
  };
}

function initializeInformation(initialState) {
  return {
    ...initialState,
  };
}

export default function App() {
  const { inputState, state } = useSelector((state, inputState) => {
    state,
      inputState
  })

  const [inputState, setInput] = useState(initialState);

  const [state, setState] = useState({
    newId: 100,
    restaurants: [],
  });

  const { restaurants } = state;

  const handleChange = (e) => {
    setInput(updateInformation(inputState, e.target));
  };

  const handleClick = () => {
    setState(addInformation(state, inputState));

    setInput(initializeInformation(initialState));
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

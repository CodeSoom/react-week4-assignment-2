import React from 'react';

import { useSelector } from 'react-redux';

import InputContainer from './InputContainer';
import List from './List';

export default function App() {
  const registers = useSelector((state) => state.registers);
  return (
    <div>
      <h1>Restaurants</h1>
      <List registers={registers} />
      <InputContainer />
    </div>
  );
}

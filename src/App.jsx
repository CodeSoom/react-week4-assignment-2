import React from 'react';

import { useSelector } from 'react-redux';

import Input from './Input';
import List from './List';

export default function App() {
  const registers = useSelector((state) => state.registers);
  return (
    <div>
      <h1>Restaurant</h1>
      <List registers={registers} />
      <Input />
    </div>
  );
}

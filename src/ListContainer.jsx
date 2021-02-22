import React from 'react';

import { useSelector } from 'react-redux';

import List from './List';

export default function ListContainer() {
  const registers = useSelector((state) => state.registers);

  return (
    <div>
      <List registers={registers} />
    </div>
  );
}

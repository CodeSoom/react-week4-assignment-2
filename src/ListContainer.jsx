import React from 'react';

import { useSelector } from 'react-redux';

import List from './List';

export default function InputContainer() {
  const restaurants = useSelector((state) => (state.restaurants));

  return (
    <List restaurants={restaurants} />
  );
}

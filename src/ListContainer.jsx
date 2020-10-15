import React from 'react';
import { useSelector } from 'react-redux';

import List from './List';

export default function App() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  return (
    <List restaurants={restaurants} />
  );
}

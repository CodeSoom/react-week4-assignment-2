import React from 'react';

import { useSelector } from 'react-redux';

import List from './List';

function selector(state) {
  const { restaurants } = state;
  return { restaurants };
}

export default function ListContainer() {
  const { restaurants } = useSelector(selector);

  return (
    <List restaurants={restaurants} />
  );
}

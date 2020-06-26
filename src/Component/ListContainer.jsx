import React from 'react';

import { useSelector } from 'react-redux';

import List from './List';

export default function ListContainer() {
  const { informations } = useSelector((state) => ({
    informations: state.informations,
  }));

  return (
    <List
      informations={informations}
    />
  );
}

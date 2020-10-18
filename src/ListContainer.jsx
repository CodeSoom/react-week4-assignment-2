import React from 'react';

import { useSelector } from 'react-redux';

import List from './List';

export default function ListContainer() {
  const { reservations } = useSelector((state) => ({
    reservations: state.reservations,
  }));

  return (
    <List reservations={reservations} />
  );
}

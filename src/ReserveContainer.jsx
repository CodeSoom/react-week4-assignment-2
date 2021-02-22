import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../__mocks__/react-redux';
import { addReservations, updateReservations } from './actions';

import Reserve from './Reserve';

export default function ReserveContainer() {
  const dispatch = useDispatch;

  const { reservations } = useSelector((state) => ({
    reservations: state.reservations,
  }));

  function handleChange(event) {
    const { name, value } = event.target;
    dispatch(updateReservations(name, value));
  }

  function handleClick() {
    dispatch(addReservations());
  }

  return (
    <Reserve
      reservations={reservations}
      onChange={handleChange}
      onClick={handleClick}
    />
  );
}

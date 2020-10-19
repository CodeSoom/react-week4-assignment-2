import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import InputReservation from '../components/InputReservation';
import {
  updateReservation,
  addReservation,
} from '../modules/actions';

export default function InputReservationContainer() {
  const { reservation } = useSelector((state) => ({
    reservation: state.reservation,
  }));

  const dispatch = useDispatch();

  function handleChange({ target, value }) {
    dispatch(updateReservation({ target, value }));
  }

  function handleClick() {
    dispatch(addReservation());
  }

  return (
    <InputReservation
      values={reservation}
      onChange={handleChange}
      onClick={handleClick}
    />
  );
}

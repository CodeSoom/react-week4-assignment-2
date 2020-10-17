import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import InputReservation from '../components/InputReservation';
import {
  updateReservationName,
  updateReservationCategory,
  updateReservationAddress,
  addReservation,
} from '../modules/actions';

export default function ListContainer() {
  const {
    reservationName,
    reservationCategory,
    reservationAddress,
  } = useSelector((state) => ({
    reservationName: state.reservationName,
    reservationCategory: state.reservationCategory,
    reservationAddress: state.reservationAddress,
  }));

  const dispatch = useDispatch();

  function handleChangeReservationName(event) {
    dispatch(updateReservationName(event.target.value));
  }

  function handleChangeReservationCategory(event) {
    dispatch(updateReservationCategory(event.target.value));
  }

  function handleChangeReservationAddress(event) {
    dispatch(updateReservationAddress(event.target.value));
  }

  function handleClick() {
    dispatch(addReservation());
  }

  return (
    <InputReservation
      name={reservationName}
      onChangeName={handleChangeReservationName}

      category={reservationCategory}
      onChangeCategory={handleChangeReservationCategory}

      address={reservationAddress}
      onChangeAddress={handleChangeReservationAddress}

      onClick={handleClick}
    />
  );
}

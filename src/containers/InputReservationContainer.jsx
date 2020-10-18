import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import InputReservation from '../components/InputReservation';
import {
  updateReservationName,
  updateReservationCategory,
  updateReservationAddress,
  addReservation,
} from '../modules/actions';

export default function InputReservationContainer() {
  const { reservation } = useSelector((state) => ({
    reservation: state.reservation,
  }));

  const dispatch = useDispatch();

  function handleChange({ event, target }) {
    const eventTargets = {
      name: updateReservationName(event.target.value),
      category: updateReservationCategory(event.target.value),
      address: updateReservationAddress(event.target.value),
    };

    dispatch(eventTargets[target]);
  }

  function handleClick() {
    dispatch(addReservation());
  }

  return (
    <InputReservation
      values={reservation}
      onChangeName={(event) => handleChange({ event, target: 'name' })}
      onChangeCategory={(event) => handleChange({ event, target: 'category' })}
      onChangeAddress={(event) => handleChange({ event, target: 'address' })}
      onClick={handleClick}
    />
  );
}

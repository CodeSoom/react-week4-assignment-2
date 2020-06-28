import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import InputContainer from './InputContainer';
import ListContainer from './ListContainer';

import {
  setReservations,
} from './actions';

import reservations from '../data/reservations';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setReservations(reservations));
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <ListContainer />
      <InputContainer />
    </div>
  );
}

import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Input from './Input';
import List from './List';

import {
  updateInformation,
  addInformation,
  initializeInformation,
} from './actions';

export default function App() {
  const {
    infoValue, restaurants,
  } = useSelector((state) => ({
    infoValue: state.infoValue,
    restaurants: state.restaurants,
  }));

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updateInformation(e.target));
  };

  const handleClick = () => {
    dispatch(addInformation(infoValue));

    dispatch(initializeInformation());
  };

  return (
    <>
      <List restaurants={restaurants} />
      <Input
        onChange={handleChange}
        onClick={handleClick}
        infoValue={infoValue}
      />
    </>
  );
}

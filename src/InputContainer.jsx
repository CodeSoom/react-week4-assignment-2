import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Input from './Input';

import {
  updateInformation,
  addInformation,
  initializeInformation,
} from './actions';

export default function App() {
  const { infoValue } = useSelector((state) => ({
    infoValue: state.infoValue,
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
    <Input
      onChange={handleChange}
      onClick={handleClick}
      infoValue={infoValue}
    />
  );
}

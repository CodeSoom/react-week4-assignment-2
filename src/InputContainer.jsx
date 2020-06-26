import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Input from './Input';

import {
  updateInformations,
} from './actions';

export default function InputContainer() {
  const dispatch = useDispatch();

  const informations = useSelector((state) => state.informations);

  function handleChangeInformations(event) {
    const target = event.target.name;
    const { value } = event.target;
    dispatch(updateInformations(target, value));
  }

  function handleClick() {
    return null;
  }

  return (
    <Input
      informations={informations}
      onChange={handleChangeInformations}
      handleClick={handleClick}
    />
  );
}

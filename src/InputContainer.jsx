import React from 'react';

import { useDispatch } from 'react-redux';

import {
  updateName,
} from './actions';

export default function InputContainer() {
  const dispatch = useDispatch();

  function handleChangeName(event) {
    dispatch(updateName(event.target.value));
  }

  return (
    <div>
      <input type="text" placeholder="이름" onChange={handleChangeName} />
    </div>
  );
}

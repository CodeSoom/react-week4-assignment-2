import React from 'react';

import { useDispatch } from 'react-redux';

import {
  updateName,
  updateCategory,
  updateAddress,
} from './actions';

export default function InputContainer() {
  const dispatch = useDispatch();

  function handleChangeName(event) {
    dispatch(updateName(event.target.value));
  }
  function handleChangeCategory(event) {
    dispatch(updateCategory(event.target.value));
  }

  function handleChangeAddress(event) {
    dispatch(updateAddress(event.target.value));
  }

  return (
    <div>
      <input type="text" placeholder="이름" onChange={handleChangeName} />
      <input type="text" placeholder="분류" onChange={handleChangeCategory} />
      <input type="text" placeholder="주소" onChange={handleChangeAddress} />
    </div>
  );
}

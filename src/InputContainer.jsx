import React from 'react';
import { useDispatch } from 'react-redux';

import { addRestaurant, updateRestaurantName } from './actions';

export default function InputContainer() {
  const dispatch = useDispatch();

  function handleClickAddRestaurant() {
    dispatch(addRestaurant());
  }

  function handleChangeName(event) {
    dispatch(updateRestaurantName(event.target.value));
  }

  return (
    <div>
      <input placeholder="이름" onChange={handleChangeName} />
      <input placeholder="분류" />
      <input placeholder="주소" />
      <button type="button" onClick={handleClickAddRestaurant}>
        등록
      </button>
    </div>
  );
}

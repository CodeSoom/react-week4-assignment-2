import React from 'react';

import { useDispatch } from 'react-redux';

import ListContainer from './ListContainer';

import InputContainer from './InputContainer';

import {
  updateName,
  updateCategory,
  updateAddress,
  addRestaurantInformation,
} from './actions';

export default function App() {
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

  function handleClickAddButton() {
    dispatch(addRestaurantInformation());
  }

  return (
    <div>
      <h1>Restaurants</h1>
      <ListContainer />
      <InputContainer />
      <input type="text" placeholder="분류" onChange={handleChangeCategory} />
      <input type="text" placeholder="주소" onChange={handleChangeAddress} />
      <button type="button" onClick={handleClickAddButton}>등록</button>
    </div>
  );
}

import React from 'react';

import { useDispatch } from 'react-redux';

import ListContainer from './ListContainer';

import InputContainer from './InputContainer';

import {
  addRestaurantInformation,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  function handleClickAddButton() {
    dispatch(addRestaurantInformation());
  }

  return (
    <div>
      <h1>Restaurants</h1>
      <ListContainer />
      <InputContainer />
      <button type="button" onClick={handleClickAddButton}>등록</button>
    </div>
  );
}

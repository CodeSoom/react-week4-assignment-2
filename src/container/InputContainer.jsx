import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Page from '../components/Page';

import {
  updateRestaurant,
  addRestaurant,
} from '../actions';

export default function PageContainer() {
  const dispatch = useDispatch();

  const { inputTitles } = useSelector((state) => ({
    inputTitles: state.inputTitles,
  }));

  function handleChangeRestaurant(name, event) {
    dispatch(updateRestaurant(name, event.target.value));
  }

  function handleClickAddRestaurant() {
    dispatch(addRestaurant());
  }

  return (
    <Page
      inputTitles={inputTitles}
      onChange={handleChangeRestaurant}
      onClick={handleClickAddRestaurant}
    />
  );
}

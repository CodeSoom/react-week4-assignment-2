import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Page from '../components/Page';

import {
  updateText,
  addRestaurant,
} from '../actions';

export default function PageContainer() {
  const dispatch = useDispatch();

  const { restaurantTitles } = useSelector((state) => ({
    restaurantTitles: state.restaurantTitles,
  }));

  function handleChangeText(name, event) {
    dispatch(updateText(name, event.target.value));
  }

  function handleClickAddRestaurant() {
    dispatch(addRestaurant());
  }

  return (
    <Page
      restaurantTitles={restaurantTitles}
      onChange={handleChangeText}
      onClick={handleClickAddRestaurant}
    />
  );
}

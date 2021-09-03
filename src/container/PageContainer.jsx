import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Page from '../components/Page';

import {
  updateRestaurant,
  addRestaurant,
} from '../actions';

export default function PageContainer() {
  const dispatch = useDispatch();

  const { restaurantTitles } = useSelector((state) => ({
    restaurantTitles: state.restaurantTitles,
  }));

  function handleChangeRestaurant(name, event) {
    dispatch(updateRestaurant(name, event.target.value));
  }

  function handleClickAddRestaurant() {
    dispatch(addRestaurant());
  }

  return (
    <Page
      restaurantTitles={restaurantTitles}
      onChange={handleChangeRestaurant}
      onClick={handleClickAddRestaurant}
    />
  );
}

import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Page from '../components/Page';

import {
  updateText,
  addRestaurant,
} from '../actions';

export default function PageContainer() {
  const dispatch = useDispatch();

  const { informations } = useSelector((state) => ({
    informations: state.informations,
  }));

  function handleChangeText(name, event) {
    dispatch(updateText(name, event.target.value));
  }

  function handleClickAddRestaurant() {
    dispatch(addRestaurant());
  }

  return (
    <Page
      informations={informations}
      onChange={handleChangeText}
      onClick={handleClickAddRestaurant}
    />
  );
}

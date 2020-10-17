import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Page from './Page';

import { addRestaurant, updateRestaurant } from './actions';

export default function App() {
  const dispatch = useDispatch();

  const { restaurant, restaurants } = useSelector((state) => ({
    restaurant: state.restaurant,
    restaurants: state.restaurant,
  }));

  function handleChangeRestaurant(event) {
    const { value, name } = event.target;

    dispatch(updateRestaurant({ value, name }));
  }

  function handleClickSubmit() {
    dispatch(addRestaurant());
  }

  return (
    <>
      <Page
        restaurant={restaurant}
        restaurants={restaurants}
        onChangeRestaurant={handleChangeRestaurant}
        onClickSubmit={handleClickSubmit}
      />
    </>
  );
}

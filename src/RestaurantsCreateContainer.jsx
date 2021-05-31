import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsForm from './RestaurantsForm';

import { addRestaurants } from './actions';

export default function RestaurantsCreateContainer() {
  const dispatch = useDispatch();
  const { restaurant } = useSelector(
  );

  function handleClick() {
    dispatch(addRestaurants());
  }

  return (
    <RestaurantsForm
      restaurant={restaurant}
      onClick={handleClick}
    />
  );
}

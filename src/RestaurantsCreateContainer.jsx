import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsForm from './RestaurantsForm';

import { addRestaurants } from './actions';


export default function RestaurantsCreateContainer() {
  const dispatch = useDispatch();
  console.log(state);
  const { restaurant } = useSelector((state) => ({
    restaurant = state.restaurant,
  }));

  function handleClick(){
    dispatch(addRestaurants());
  }

  return (
    <RestaurantsForm 
    restaurant={restaurant}
    onClick={handleClick}
    />
  );
}

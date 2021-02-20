import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantForm from './RestaurantForm';

import { changeRestaurant } from './restaurantSlice';

export default function RestaurantFormContainer() {
  const dispatch = useDispatch();

  const { restaurant } = useSelector('restaurant');

  const handleChange = ({ name, value }) => {
    dispatch(changeRestaurant({ name, value }));
  };

  const handleClick = () => {
    // TODO: 작성하기
  };

  return (
    <RestaurantForm
      restaurant={restaurant}
      onChange={handleChange}
      onClick={handleClick}
    />
  );
}

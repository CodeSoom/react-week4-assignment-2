import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantForm from './RestaurantForm';

import {
  changeRestaurantField,
  // addRestaurant,
} from './actions';

export default function RestaurantFormContainer() {
  const dispatch = useDispatch();

  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  const handleChange = ({ name, value }) => {
    dispatch(changeRestaurantField({ name, value }));
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

import React from 'react';

import { useSelector } from 'react-redux';

import RestaurantsList from './RestaurantsList';

export default function RestaurantsListContainer() {
  const { restaurantsList } = useSelector((state) => ({
    restaurantsList: state.restaurantsList,
  }));

  return <RestaurantsList restaurants={restaurantsList} />;
}

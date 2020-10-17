import React from 'react';

import { useSelector } from 'react-redux';

import List from './List';

export default function RestaurantsContainer() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  return (
    <List restaurants={restaurants} />
  );
}

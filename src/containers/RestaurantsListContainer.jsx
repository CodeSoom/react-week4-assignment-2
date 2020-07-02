import React from 'react';

import { useSelector } from 'react-redux';

import List from '../components/List';

export default function RestaurantsListContainer() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  return (
    <List restaurants={restaurants} />
  );
}

import React from 'react';

import { useSelector } from 'react-redux';

import List from './List';

export default function ListContainer() {
  const { restaurants } = useSelector((restaurant) => ({
    restaurants: restaurant.restaurants,
  }));

  return (
    <List
      restaurants={restaurants}
    />
  );
}

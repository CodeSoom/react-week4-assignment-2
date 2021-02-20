import React from 'react';

import { useSelector } from 'react-redux';

import List from './List';

export default function ListContainer() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  return (
    <div>
      <h1>Restaurants</h1>
      <List
        restaurants={restaurants}
      />
    </div>
  );
}

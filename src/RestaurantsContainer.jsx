import React from 'react';

import { useSelector } from 'react-redux';

import Restaurants from './Restaurants';

export default function RestaurantsContainer() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  return (
    <div>
      <h1>Restaurants</h1>
      <Restaurants
        restaurants={restaurants}
      />
    </div>
  );
}

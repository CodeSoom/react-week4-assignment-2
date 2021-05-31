import React from 'react';

import { useSelector } from 'react-redux';

import Restaurants from './Restaurants';

import restaurants from "../fixtures/restaurants";

export default function RestaurantsContainer() {
  // const restaurants = useSelector((state) => ({
  //   restaurants: state.restaurants,
  // }));

  return (
    <Restaurants restaurants={restaurants}/>
  );
}

import React from 'react';
import { useSelector } from 'react-redux';
import Restaurants from './Restaurants';

export default function RestaurantsContainer() {
  const { restaurants } = useSelector((state) => ({ restaurants: state.restaurants }));
  console.log(restaurants);
  return (
    <Restaurants restaurants={restaurants} />
  );
}

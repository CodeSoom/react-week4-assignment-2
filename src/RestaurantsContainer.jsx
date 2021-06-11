import React from 'react';
import { useSelector } from 'react-redux';

import InputContainer from './InputContainer';
import ListContainer from './ListContainer';

export default function RestaurantsContainer() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  return (
    <div>
      <h1>Restaurants</h1>
      <ListContainer restaurants={restaurants} />
      <InputContainer />
    </div>
  );
}

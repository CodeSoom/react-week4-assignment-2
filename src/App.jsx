import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addRestaurant, updateRestaurant } from './actions';

import Page from './Page';

export default function App() {
  const { restaurants, restaurant } = useSelector((state) => ({
    newId: state.newId,
    restaurant: state.restaurant,
    restaurants: state.restaurants,
  }));

  const dispatch = useDispatch();

  const handleClickAdd = () => {
    dispatch(addRestaurant());
  };

  const handleChange = (field) => (event) => {
    dispatch(updateRestaurant(field, event.target.value));
  };

  return (
    <Page
      restaurants={restaurants}
      restaurant={restaurant}
      onClickAdd={handleClickAdd}
      onChange={handleChange}
    />
  );
}

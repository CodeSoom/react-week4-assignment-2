import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import List from './List';
import Input from './Input';

import {
  updateRestaurantInformation,
  addRestaurantInformation,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  const {
    name,
    category,
    address,
    restaurants,
  } = useSelector((state) => ({
    name: state.name,
    category: state.category,
    address: state.address,
    restaurants: state.restaurants,
  }));

  function handleChange(event) {
    const { name: targetName, value } = event.target;

    dispatch(updateRestaurantInformation(targetName, value));
  }

  function handleClick() {
    dispatch(addRestaurantInformation());
  }

  return (
    <div>
      <h1>Restaurants</h1>
      <List
        restaurants={restaurants}
      />
      <Input
        name={name}
        category={category}
        address={address}
        onChange={handleChange}
        onClick={handleClick}
      />
    </div>
  );
}

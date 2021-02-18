import React, { useState } from 'react';

import InputForm from './InputForm';

import RestaurantsList from './RestaurantsList';

export default function App() {
  const [state, setState] = useState({
    id: 100,
    name: '',
    category: '',
    address: '',
    restaurantsList: [],
  });

  const {
    id, name, category, address, restaurantsList,
  } = state;

  function updateInput(event) {
    if (event.target.name === 'name') {
      setState({
        ...state,
        name: event.target.value,
      });
    }

    if (event.target.name === 'category') {
      setState({
        ...state,
        category: event.target.value,
      });
    }

    if (event.target.name === 'address') {
      setState({
        ...state,
        address: event.target.value,
      });
    }
  }

  function addRestaurants() {
    setState({
      ...state,
      id: id + 1,
      name: '',
      category: '',
      address: '',
      restaurantsList: [...restaurantsList, {
        id, name, category, address,
      }],
    });
  }

  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantsList restaurants={restaurantsList} />
      <InputForm
        nameValue={name}
        categoryValue={category}
        addressValue={address}
        onChange={updateInput}
        onClick={addRestaurants}
      />
    </div>
  );
}

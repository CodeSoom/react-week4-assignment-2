import React, { useState } from 'react';

import Input from './Input';
import List from './List';

const initialState = {
  id: 1,
  restaurant: {
    name: '',
    category: '',
    address: '',
  },
  reservations: [],
};

export default function App() {
  const [state, setState] = useState(initialState);

  const { id, restaurant, reservations } = state;

  function handleChangeRestaurantName(event) {
    const { restaurant } = state;
    setState({
      ...state,
      restaurant: {
        name: event.target.value,
        category: restaurant.category,
        address: restaurant.address,
      }
    })
  }

  function handleChangeRestaurantCategory(event) {
    const { restaurant } = state;
    setState({
      ...state,
      restaurant: {
        name: restaurant.name,
        category: event.target.value,
        address: restaurant.address,
      }
    })
  }

  function handleChangeRestaurantAddress(event) {
    const { restaurant } = state;
    setState({
      ...state,
      restaurant: {
        name: restaurant.name,
        category: restaurant.category,
        address: event.target.value,
      }
    })
  }

  function handleClickRegisterReservation() {
    const { restaurant, reservations } = state;

    setState({
      ...state,
      id: id + 1,
      restaurant: {
        name: '',
        category: '',
        address: '',
      },
      reservations: [...reservations, { id, restaurant }],
    });
  }

  return (
    <div>
      <h1>Restaurants</h1>
      <List
        reservations={reservations}
      />
      <Input
        value={restaurant}
        onChangeName={handleChangeRestaurantName}
        onChangeCategory={handleChangeRestaurantCategory}
        onChangeAddress={handleChangeRestaurantAddress}
        onClick={handleClickRegisterReservation}
      />
    </div>
  );
}

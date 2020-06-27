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

function updateRestaurantName(state, value) {
  const { restaurant } = state;

  return {
    ...state,
    restaurant: {
      name: value,
      category: restaurant.category,
      address: restaurant.address,
    },
  };
}

function updateRestaurantCategory(state, value) {
  const { restaurant } = state;

  return {
    ...state,
    restaurant: {
      name: restaurant.name,
      category: value,
      address: restaurant.address,
    },
  };
}

function updateRestaurantAddress(state, value) {
  const { restaurant } = state;

  return {
    ...state,
    restaurant: {
      name: restaurant.name,
      category: restaurant.category,
      address: value,
    },
  };
}

function registerReservation(state) {
  const { id, restaurant, reservations } = state;

  return {
    ...state,
    id: id + 1,
    restaurant: {
      name: '',
      category: '',
      address: '',
    },
    reservations: [...reservations, { id, restaurant }],
  };
}

export default function App() {
  const [state, setState] = useState(initialState);

  const { restaurant, reservations } = state;

  function handleChangeRestaurantName(event) {
    setState(updateRestaurantName(state, event.target.value));
  }

  function handleChangeRestaurantCategory(event) {
    setState(updateRestaurantCategory(state, event.target.value));
  }

  function handleChangeRestaurantAddress(event) {
    setState(updateRestaurantAddress(state, event.target.value));
  }

  function handleClickRegisterReservation() {
    setState(registerReservation(state));
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

import React, { useState } from 'react';

import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    id: 1,
    restaurant: {
      name: '',
      category: '',
      address: '',
    },
    restaurants: [],
  });

  const { id, restaurant, restaurants } = state;

  function handleChangeRestaurant(event) {
    const { value, name } = event.target;
    setState({
      ...state,
      restaurant: {
        ...restaurant,
        [name]: value,
      },
    });
  }

  function handleClickSubmit() {
    setState({
      ...state,
      restaurant: {
        name: '',
        category: '',
        address: '',
      },
      id: id + 1,
      restaurants: [...restaurants, { id, ...restaurant }],
    });
  }

  return (
    <>
      <Page
        restaurant={restaurant}
        restaurants={restaurants}
        onChangeRestaurant={handleChangeRestaurant}
        onClickSubmit={handleClickSubmit}
      />
    </>
  );
}

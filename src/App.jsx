import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Page from './Page';

import {
  updateName,
  updateCategory,
  updateAddress,
  addRestaurantInformation,
} from './actions';

function selector(restaurant) {
  return {
    name: restaurant.name,
    category: restaurant.category,
    address: restaurant.address,
    restaurants: restaurant.restaurants,
  };
}

export default function App() {
  const {
    name,
    category,
    address,
    restaurants,
  } = useSelector(selector);

  const dispatch = useDispatch();

  function handleChangeName(event) {
    dispatch(updateName(event.target.value));
  }

  function handleChangeCategory(event) {
    dispatch(updateCategory(event.target.value));
  }

  function handleChangeAddress(event) {
    dispatch(updateAddress(event.target.value));
  }

  function handleClickAddButton() {
    dispatch(addRestaurantInformation());
  }

  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        {
          restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              {`${restaurant.name} | ${restaurant.category} | ${restaurant.address}`}
            </li>
          ))
        }
      </ul>
      <Page
        name={name}
        category={category}
        address={address}
        restaurants={restaurants}
        onChangeName={handleChangeName}
        onChangeCategory={handleChangeCategory}
        onChangeAddress={handleChangeAddress}
        onClickAddButton={handleClickAddButton}
      />
    </div>
  );
}

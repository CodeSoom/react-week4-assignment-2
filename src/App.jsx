import React from 'react';

import { useSelector } from 'react-redux';

import RestaurantInputContainer from "./RestaurantInputContainer";

export default function App() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        {restaurants.map(({
          id, name, type, address,
        }) => <li key={id}>{`${name} | ${type} | ${address}`}</li>)}
      </ul>
      <RestaurantInputContainer />
    </div>
  );
}

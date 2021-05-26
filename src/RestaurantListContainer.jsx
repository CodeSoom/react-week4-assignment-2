import React from 'react';

import { useSelector } from 'react-redux';

export default function RestaurantListContainer() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  return (
    <div>
      <ul>
        {restaurants.map(({
          id, name, type, address,
        }) => <li key={id}>{`${name} | ${type} | ${address}`}</li>)}
      </ul>
    </div>
  );
}

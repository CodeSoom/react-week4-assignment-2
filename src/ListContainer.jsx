import React from 'react';

import { useSelector } from 'react-redux';

export default function ListContainer() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  return (
    <ul>
      {
        restaurants.map(({ name, category, location }) => (
          <li key={name}>{`${name} | ${category} | ${location}`}</li>
        ))
      }
    </ul>
  );
}

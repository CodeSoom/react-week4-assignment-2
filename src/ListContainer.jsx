import React from 'react';

import { useSelector } from 'react-redux';

import Item from './Item';

export default function ListContainer() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  return (
    <ul>
      {
        restaurants.map((info) => (
          <Item key={info.name} info={info} />
        ))
      }
    </ul>
  );
}

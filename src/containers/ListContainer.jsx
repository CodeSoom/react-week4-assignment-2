import React from 'react';

import { useSelector } from 'react-redux';

import List from '../components/List';

export default function ListContainer() {
  const { items } = useSelector((state) => ({
    items: state.restaurant.items,
  }));

  return (
    <List
      restaurants={items}
    />
  );
}

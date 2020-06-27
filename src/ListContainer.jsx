import React from 'react';
import List from './List';
import { useSelector } from 'react-redux';

export default function ListContainer() {
  const {restaurants} = useSelector((state) => ({
    restaurants: state.restaurants
  }));

  return (
    <List restaurants={restaurants} />
  )
}
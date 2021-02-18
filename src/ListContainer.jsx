import React from 'react';
import { useSelector } from 'react-redux';
import List from './List';

function ListContainer() {
  const { list } = useSelector((state) => ({
    list: state.list,
  }));

  return (
    <List list={list} />
  );
}

export default ListContainer;

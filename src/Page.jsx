import React from 'react';

import InputList from './InputList';
import List from './List';

export default function Page({
  restaurants,
  restaurant,
  onClickAdd,
  onChange,
}) {
  return (
    <div>
      <h1>Restaurants</h1>
      <List restaurants={restaurants} />
      <InputList restaurant={restaurant} onClick={onClickAdd} onChange={onChange} />
    </div>
  );
}

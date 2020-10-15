import React from 'react';

import Input from './Input';
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
      <Input restaurant={restaurant} onClick={onClickAdd} onChange={onChange} />
    </div>
  );
}

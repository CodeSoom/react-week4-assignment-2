import React from 'react';

import Form from './Form';
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
      <Form restaurant={restaurant} onClick={onClickAdd} onChange={onChange} />
    </div>
  );
}

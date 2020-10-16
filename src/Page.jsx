import React from 'react';

import Input from './Input';
import List from './List';

export default function Page({
  name, category, address, onChangeTitle, onClickAddItem, restaurants,
}) {
  return (
    <div>
      <h1>Restaurants</h1>
      <Input
        name={name}
        categoryTitle={category}
        addressTitle={address}
        onChangeTitle={onChangeTitle}
        onClickAddItem={onClickAddItem}
      />
      <List
        items={restaurants}
      />
    </div>
  );
}

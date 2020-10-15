import React from 'react';

import Input from './Input';
import List from './List';

export default function Page({ name, category, address, onChangeTitle, onClickAddItem, items }) {
  return(
    <div>
      <h1>Restaurants</h1>
      <Input
        name={name}
        categoryTitle={category}
        addressTitle={address}
        onChange={onChangeTitle}
        onClick={onClickAddItem} 
      />
      <List 
        items={items}
      />
    </div>
  );
};
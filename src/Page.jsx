import React from 'react';

import Button from './Button';
import Input from './Input';
import List from './List';

const Page = ({
  onChangeRestaurant, onClickSubmit, restaurant, restaurants,
}) => (
  <>
    <div>
      Restaurants
    </div>
    <List restaurants={restaurants} />
    <Input onChange={onChangeRestaurant} restaurant={restaurant} />
    <Button onClick={onClickSubmit} />
  </>
);

export default Page;

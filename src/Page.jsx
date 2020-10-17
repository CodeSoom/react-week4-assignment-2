import React from 'react';

import Button from './Button';
import Input from './Input';

const Page = ({
  onChangeRestaurant, onClickSubmit, restaurant,
}) => (
  <>
    <div>
      Restaurants
    </div>
    <Input onChange={onChangeRestaurant} restaurant={restaurant} />
    <Button onClick={onClickSubmit} />
  </>
);

export default Page;

import React from 'react';
import Button from './Button';
import Input from './Input';

const Page = ({ onChangeRestaurant }) => (
  <>
    <div>
      Restaurants
    </div>
    <Input onChange={onChangeRestaurant} />
    <Button />
  </>
);

export default Page;

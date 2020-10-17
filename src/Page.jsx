import React from 'react';

import Button from './Button';
import Input from './Input';

const Page = ({ onChangeRestaurant, onClickSubmit }) => (
  <>
    <div>
      Restaurants
    </div>
    <Input onChange={onChangeRestaurant} />
    <Button onClick={onClickSubmit} />
  </>
);

export default Page;

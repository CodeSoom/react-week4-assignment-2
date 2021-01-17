import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  addRestaurant,
  changeRestaurantField,
} from './actions';

import Input from './Input';

export default function RestaurantCreateContainer() {
  const dispatch = useDispatch();
  const { restaurant } = useSelector((state) => state);
  const { name, category, address } = restaurant;

  const handleClick = () => {
    dispatch(addRestaurant(`${name} | ${category} | ${address}`));
  };

  const handleChange = (event) => {
    const { name: inputName, value } = event.target;

    dispatch(changeRestaurantField(inputName, value));
  };

  return (
    <div>
      <Input
        name="name"
        value={name}
        placeholder="이름"
        onChange={handleChange}
      />
      <Input
        name="category"
        value={category}
        placeholder="분류"
        onChange={handleChange}
      />
      <Input
        name="address"
        value={address}
        placeholder="주소"
        onChange={handleChange}
      />
      <button
        type="button"
        onClick={handleClick}
      >
        등록
      </button>
    </div>
  );
}

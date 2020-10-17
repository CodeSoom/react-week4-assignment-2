import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import actions from './actions';

import Input from './Input';

export default function InputContainer() {
  const dispatch = useDispatch();
  const {
    name,
    category,
    address,
  } = useSelector((state) => state);

  const handleClick = () => {
    dispatch(actions.addRestaurant(`${name} | ${category} | ${address}`));
  };

  const handleChange = (event) => {
    const { name: inputName, value } = event.target;

    dispatch(actions.changeRestaurantInput(inputName, value));
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

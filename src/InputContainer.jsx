import React from 'react';

import { useDispatch } from 'react-redux';

import actions from './actions';

import Input from './Input';

export default function InputContainer() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(actions.addRestaurant('이름 | 분류 | 주소'));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    dispatch(actions.changeRestaurantInput(name, value));
  };

  return (
    <div>
      <Input
        name="name"
        placeholder="이름"
        onChange={handleChange}
      />
      <Input
        name="type"
        placeholder="분류"
        onChange={handleChange}
      />
      <Input
        name="place"
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

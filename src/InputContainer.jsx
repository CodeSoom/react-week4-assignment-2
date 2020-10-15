import React from 'react';

import { useDispatch } from 'react-redux';

import actions from './actions';

import Input from './Input';

export default function InputContainer() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(actions.addRestaurant('이름 | 분류 | 주소'));
  };

  return (
    <div>
      <Input
        placeholder="이름"
      />
      <Input
        placeholder="분류"
      />
      <Input
        placeholder="주소"
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

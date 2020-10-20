import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Inputs from './Inputs';

import {
  onChange,
  onClick,
} from './actions';

function selector(state) {
  const { restaurant } = state;
  return { restaurant };
}

export default function InputContainer() {
  const { restaurant } = useSelector(selector);

  const dispatch = useDispatch();

  function handleChange({ target: { name, value } }) {
    dispatch(onChange({ name, value }));
  }

  function handleClick() {
    dispatch(onClick());
  }
  return (
    <>
      <Inputs
        restaurant={restaurant}
        onChange={handleChange}
      />
      <button
        type="button"
        onClick={handleClick}
      >
        등록
      </button>
    </>
  );
}

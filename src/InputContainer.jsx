import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Input from './Input';

import {
  changeName,
  changeCuisine,
  changeLocation,
  clickAddRestaurant,
} from './actions';

function selector(state) {
  return {
    name: state.name,
    cuisine: state.cuisine,
    location: state.location,
  };
}

function renderInputs() {
  const {
    name,
    cuisine,
    location,
  } = useSelector(selector);

  const dispatch = useDispatch();

  function handlechangeName({ target: { value } }) {
    dispatch(changeName(value));
  }

  function handlechangeCuisine({ target: { value } }) {
    dispatch(changeCuisine(value));
  }

  function handlechangeLocation({ target: { value } }) {
    dispatch(changeLocation(value));
  }

  const inputs = [
    {
      id: 'input-restaurant-name',
      inputName: 'name',
      placeholder: '이름',
      value: name,
      onChange: handlechangeName,
    },
    {
      id: 'input-restaurant-cuisine',
      inputName: 'category',
      placeholder: '분류',
      value: cuisine,
      onChange: handlechangeCuisine,
    },
    {
      id: 'input-restaurant-location',
      inputName: 'address',
      placeholder: '주소',
      value: location,
      onChange: handlechangeLocation,
    },
  ];

  return inputs.map(({
    id, inputName, placeholder, value, onChange,
  }) => (
    <Input
      id={id}
      name={inputName}
      title={placeholder}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      key={id}
    />
  ));
}

export default function InputContainer() {
  const dispatch = useDispatch();
  function handleClickAddRestaurant() {
    dispatch(clickAddRestaurant());
  }
  return (
    <>
      {renderInputs()}
      <button
        type="button"
        onClick={handleClickAddRestaurant}
      >
        등록
      </button>
    </>
  );
}

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
    restaurantName: state.restaurantName,
    restaurantCuisine: state.restaurantCuisine,
    restaurantLocation: state.restaurantLocation,
  };
}

function renderInputs() {
  const {
    restaurantName,
    restaurantCuisine,
    restaurantLocation,
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
      placeholder: '이름',
      value: restaurantName,
      onChange: handlechangeName,
    },
    {
      id: 'input-restaurant-cuisine',
      placeholder: '분류',
      value: restaurantCuisine,
      onChange: handlechangeCuisine,
    },
    {
      id: 'input-restaurant-location',
      placeholder: '주소',
      value: restaurantLocation,
      onChange: handlechangeLocation,
    },
  ];

  return inputs.map(({
    id, placeholder, value, onChange,
  }) => (
    <Input
      id={id}
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

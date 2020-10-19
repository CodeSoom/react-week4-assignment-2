import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Inputs from './Inputs';

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

export default function InputContainer() {
  const {
    name,
    cuisine,
    location,
  } = useSelector(selector);

  const dispatch = useDispatch();

  function handleChangeName({ target: { value } }) {
    dispatch(changeName(value));
  }

  function handleChangeCuisine({ target: { value } }) {
    dispatch(changeCuisine(value));
  }

  function handleChangeLocation({ target: { value } }) {
    dispatch(changeLocation(value));
  }

  function handleClickAddRestaurant() {
    dispatch(clickAddRestaurant());
  }
  return (
    <>
      <Inputs
        name={name}
        cuisine={cuisine}
        location={location}
        onChangeName={handleChangeName}
        onChangeCuisine={handleChangeCuisine}
        onChangeLocation={handleChangeLocation}
      />
      <button
        type="button"
        onClick={handleClickAddRestaurant}
      >
        등록
      </button>
    </>
  );
}

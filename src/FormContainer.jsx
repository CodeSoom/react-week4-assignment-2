import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeInput, addRestaurant } from './actions';

import AddForm from './AddForm';

export default function FormContainer() {
  const {
    restaurantInformation,
  } = useSelector((state) => ({
    restaurantInformation: state.restaurantInformation,
  }));

  const dispatch = useDispatch();

  const handleChageInput = (event) => {
    const { value, name } = event.target;

    dispatch(changeInput({ value, name }));
  };

  const handleClickAddButton = (event) => {
    event.preventDefault();

    dispatch(addRestaurant());
  };

  return (
    <AddForm
      restaurantInformation={restaurantInformation}
      onChangeInput={handleChageInput}
      onClickAddButton={handleClickAddButton}
    />
  );
}

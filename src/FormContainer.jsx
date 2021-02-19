import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

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

    dispatch({
      type: 'changeInput',
      payload: { value, name },
    });
  };

  const handleClickAddButton = (event) => {
    event.preventDefault();

    dispatch({
      type: 'addRestaurant',
    });
  };

  return (
    <AddForm
      restaurantInformation={restaurantInformation}
      onChangeInput={handleChageInput}
      onClickAddButton={handleClickAddButton}
    />
  );
}

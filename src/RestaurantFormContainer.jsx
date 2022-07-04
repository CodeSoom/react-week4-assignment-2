import { useDispatch, useSelector } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';

import {
  addRestaurant, updateRestaurantAdress, updateRestaurantName, updateRestaurantType,
} from './actions';

import Form from './Form';

export default function InputContainer() {
  const dispatch = useDispatch();
  const {
    restaurantName, restaurantType, restaurantAdress,
  } = useSelector((state) => state);

  function handleChangeRestaurantName(event) {
    dispatch(updateRestaurantName(event.target.value));
  }

  function handleChangeRestaurantType(event) {
    dispatch(updateRestaurantType(event.target.value));
  }

  function handleChangeRestaurantAdress(event) {
    dispatch(updateRestaurantAdress(event.target.value));
  }

  function handleClickAddRestaurant() {
    dispatch(addRestaurant(uuidv4()));
  }

  return (
    <Form
      restaurantName={restaurantName}
      restaurantType={restaurantType}
      restaurantAdress={restaurantAdress}
      onChangeRestaurantName={handleChangeRestaurantName}
      onChangeRestaurantType={handleChangeRestaurantType}
      onChangeRestaurantAdress={handleChangeRestaurantAdress}
      onClickAddRestaurant={handleClickAddRestaurant}
    />
  );
}

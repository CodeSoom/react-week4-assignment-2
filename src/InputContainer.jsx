import { useDispatch, useSelector } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';

import {
  addRestaurant, updateRestaurantAdress, updateRestaurantName, updateRestaurantType,
} from './actions';

import Input from './Input';

export default function InputContainer() {
  const dispatch = useDispatch();
  const {
    nameInput, typeInput, adressInput,
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
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Input
      nameInput={nameInput}
      typeInput={typeInput}
      adressInput={adressInput}
      handleChangeRestaurantName={handleChangeRestaurantName}
      handleChangeRestaurantType={handleChangeRestaurantType}
      handleChangeRestaurantAdress={handleChangeRestaurantAdress}
      handleClickAddRestaurant={handleClickAddRestaurant}
    />
  );
}

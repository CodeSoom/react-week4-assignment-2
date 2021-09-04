import { useDispatch, useSelector } from 'react-redux';

import {
  addRestaurant,
  updateAddressText,
  updateCategoryText,
  updateNameText,
} from './actions';

import Form from './Form';

export default function FormContainer() {
  const { nameText, categoryText, addressText } = useSelector((state) => ({
    nameText: state.nameText,
    categoryText: state.categoryText,
    addressText: state.addressText,
  }));

  const dispatch = useDispatch();

  function handleChangeName(event) {
    dispatch(updateNameText(event.target.value));
  }

  function handleChangeCategory(event) {
    dispatch(updateCategoryText(event.target.value));
  }

  function handleChangeAddress(event) {
    dispatch(updateAddressText(event.target.value));
  }

  function handleAddRestaurant() {
    dispatch(addRestaurant());
  }

  return ((
    <Form
      nameText={nameText}
      categoryText={categoryText}
      addressText={addressText}
      onChangeName={handleChangeName}
      onChangeCategory={handleChangeCategory}
      onChangeAddress={handleChangeAddress}
      onClick={handleAddRestaurant}
    />
  ));
}

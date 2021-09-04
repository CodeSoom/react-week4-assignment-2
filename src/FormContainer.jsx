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

  function handleChangeInput(name, value) {
    if (name === 'name') {
      dispatch(updateNameText(value));
      return;
    }
    if (name === 'category') {
      dispatch(updateCategoryText(value));
      return;
    }
    dispatch(updateAddressText(value));
  }

  function handleAddRestaurant() {
    dispatch(addRestaurant());
  }

  return ((
    <Form
      nameText={nameText}
      categoryText={categoryText}
      addressText={addressText}
      onChangeInput={handleChangeInput}
      onClick={handleAddRestaurant}
    />
  ));
}
